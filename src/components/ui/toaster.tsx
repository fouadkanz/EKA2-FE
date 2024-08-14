"use client"

import {
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action,footer, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex flex-col">
              {title && <ToastTitle>{title}</ToastTitle>}

              {description && (
                <div className="w-full">
                <ToastDescription>{description}</ToastDescription>
                </div>
                 
              )}
               {footer && (
                    <div className="w-full">
                    <ToastDescription>{footer}</ToastDescription></div>
                  )}
            </div>
            <div>
            {action}
            </div>
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
