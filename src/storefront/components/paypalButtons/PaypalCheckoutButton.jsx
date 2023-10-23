import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export const PaypalCheckoutButton = ({ product, onClick, onPaypalSuccess }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // mover useNavigate dentro de una función

  const handleApprove = async (orderId) => {
    //cal backend function to fulfill order

    //if response is succes
    setPaidFor(true);

    // Refresh user's account or subscription status

    //if the response is error
    //setError(Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@vivtwins.com for assistance.)
  };

  const handleSuccess = () => {
    onPaypalSuccess();
  };

  if (paidFor) {
    //Redirect to /home in desktop version
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      window.close();
      handleSuccess();
    } else {
      handleSuccess();
    }
  }

  if (error) {
    // Display error message, modal or redirect user to error page
  }

  return (
    <>
      <PayPalButtons
        onTouchStart={(data, actions) => {
          // Validate on button click, client or server side
          const hasAlreadyBoughtCourse = false;

          if (hasAlreadyBoughtCourse) {
            setError("You already bought this courses");

            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  value: product.price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order", order);

          handleApprove(data.orderID);
          onClick();
        }}
        onCancel={() => {
          // Display cancel message, modal or redirect user to cancel page or back to cart
        }}
        onError={(err) => {
          setUserProperties(err);
          console.log("Paypal Checkout onError", err);
        }}
      />
    </>
  );
};
