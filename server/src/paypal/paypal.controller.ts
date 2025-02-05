import { Controller, Get, Post, Query, Res, HttpStatus, Body } from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { Response } from 'express';

@Controller('paypal')
export class PaypalController {
  constructor(private readonly paypalService: PaypalService) {}

  //Crear una orden y devolver la URL de aprobación de PayPal
  @Post('create-order')
  async createOrder(
    @Body() body: { amount: number; currency: string },
    @Res() res: Response
  ) {
    try {
      const order = await this.paypalService.createOrder(body.amount, body.currency);

      // Extrae la URL de aprobación de PayPal
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

