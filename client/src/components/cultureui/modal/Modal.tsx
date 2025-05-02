"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@/common/assets/icons/Close";
import "./modal.css";

interface ModalProps {
  title?: string;
  imageSrc?: string;
  description?: string;
  backgroundColor?: string;
  titleSize?: string;
  descriptionSize?: string;
  buttonText?: string;
  textColor?: string;
  fontWeight?: "300" | "400" | "500" | "600" | "700";
  border?: string;
  successMessageBg?: string;
  successMessageText?: string;
  inputPlaceholder?: string;
  onSubmit?: (email: string) => void;
  trigger?: React.ReactNode;
  customSubmitButton?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title = "Start building with Culture UI",
  imageSrc,
  description = "A short description or information goes here.",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  titleSize = "24px",
  descriptionSize = "16px",
  fontWeight = "700",
  buttonText = "Submit",
  border,
  successMessageBg,
  successMessageText,
  inputPlaceholder = "Your email",
  onSubmit,
  trigger,
  customSubmitButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;
    onSubmit?.(email);
    setSubmitted(true);
  };

  return (
    <>
      {trigger ? (
        <div onClick={() => setIsOpen(true)}>{trigger}</div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="submit-button">
          Open Modal
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="modal-content p-4 gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ backgroundColor, color: textColor, border }}
            >
              <div className="close-wrapper z-1" style={{ backgroundColor }}>
                <div className="close-container z-40">
                  <button onClick={() => setIsOpen(false)}>
                    <CloseIcon stroke="#595D62" />
                  </button>
                </div>
              </div>

              {imageSrc && (
                <div className="relative z-10">
                  <motion.img
                    src={imageSrc}
                    alt="Modal Image"
                    className="w-full rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}

              <motion.div
                className="modal-header my-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <h2 style={{ fontSize: titleSize, fontWeight }}>{title}</h2>
                <p style={{ fontSize: descriptionSize, fontWeight }}>
                  {description}
                </p>
              </motion.div>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder={inputPlaceholder}
                  className="input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="modal-footer mt-4">
                  {submitted ? (
                    <motion.div
                      className="success-message"
                      style={{
                        backgroundColor: successMessageBg,
                        color: successMessageText,
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      Gracias por suscribirte a nuestro newsletter
                    </motion.div>
                  ) : customSubmitButton ? (
                    customSubmitButton
                  ) : (
                    <button className="submit-button-modal" type="submit">
                      {buttonText}
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
