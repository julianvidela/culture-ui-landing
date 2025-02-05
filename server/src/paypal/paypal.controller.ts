import { Controller, Get, Post, Query, Res, HttpStatus, Body } from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { Response } from 'express';
import { PlanService } from 'src/plan/plan.service';

@Controller('paypal')
export class PaypalController {
  constructor(private readonly paypalService: PaypalService,private readonly planService: PlanService) {}

  //Crear una orden y devolver la URL de aprobación de PayPal
  @Post('create-order')
  async createOrder(
    @Body() body: { plan: string },
    @Res() res: Response
  ) {
    try {
      // 1️⃣ Buscar el plan en la base de datos
      const plan = await this.planService.findByName(body.plan);
      if (!plan) {
        return res.status(HttpStatus.NOT_FOUND).json({ error: 'Plan not found' });
      }
  
      // 2️⃣ Crear la orden en PayPal con los datos del plan
      const order = await this.paypalService.createOrder(plan.price, plan.currency);
  
      // 3️⃣ Extraer la URL de aprobación de PayPal
      const approvalUrl = order.links.find((link) => link.rel === 'approve')?.href;
  
      return res.status(HttpStatus.OK).json({ approvalUrl });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
  

  //Capturar el pago después de que el usuario haya pagado
  @Get('success')
  async success(@Query('token') orderId: string, @Res() res: Response) {
    try {
      const capture = await this.paypalService.capturePayment(orderId);
      return res.status(HttpStatus.OK).json({ message: 'Pago exitoso', capture });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  // 🔹 3️⃣ Si el usuario cancela el pago
  @Get('cancel')
  cancel(@Res() res: Response) {
    return res.status(HttpStatus.OK).json({ message: 'Pago cancelado por el usuario' });
  }
}

