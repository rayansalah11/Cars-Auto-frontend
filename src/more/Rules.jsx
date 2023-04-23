import React from "react";
import "./Rules.css";
import Header from "../component/Home/Header";
import BottomTab from "./BottomTab";
import MetaData from "./Metadata";
import Footer from "../Footer";

const Rules = () => {
  return (
    <>
      <MetaData title="Rules" />
      <Header />
      <div
        className="rules"
        style={{
          padding: "50px 30px",
          display: "flex",
          width: "95%",
          overflow: "hidden",
        }}
      >
        <ul className="rules">
          <span
            style={{
              color: "#000",
              fontSize: "1.3rem",
              fontWeight: "800",
              fontFamily: "Roboto",
            }}
          >
            Some Rules:
          </span>
          <li>
            1- Easy Return Policy: We offer an easy return policy, and you can
            return your product within 30 days of purchase. However, you will
            have to bear the delivery charges for the return.
          </li>
          <li>
            2- Cash on Delivery (COD) Charges: If you choose to pay through COD,
            you will have to pay the delivery charge upfront. In Los Angeles
            City, the charge is 70tk, and outside Jashore, it is 120 tk.
          </li>
          <li>
            3- Out of Stock Products: We do not sell out of stock products.
            However, you can subscribe to our newsletter to get notified when
            the product is back in stock.
          </li>
          <li>
            4- Quality of Products: We strive to provide the best quality
            products to our customers. Our products go through a rigorous
            quality control process before they are shipped.
          </li>
          <li>
            5- New Features: We are continuously working to improve our services
            and provide new features to our customers. Keep an eye out for our
            upcoming updates and features.
          </li>

          <li>
            6 -Customer Support: Our customer support team is always ready to
            help you with any queries or issues. You can contact us through
            email, phone, or live chat.
          </li>

          <li>
            7- Privacy Policy: We respect your privacy and ensure that your
            personal information is kept secure. Please read our privacy policy
            to know more about how we use and protect your data.
          </li>
          <li>
            8- Terms and Conditions: By using our website, you agree to our
            terms and conditions. Please read them carefully before making any
            purchase.
          </li>
          <li>
            9- Discounts and Promotions: We offer discounts and promotions from
            time to time. Keep checking our website to avail of these offers.
          </li>
          <li>
            10- Thank you for choosing us: We appreciate your business and thank
            you for choosing us. We hope to provide you with an excellent
            shopping experience.
          </li>
        </ul>
      </div>
      <Footer />
      <BottomTab />
    </>
  );
};

export default Rules;
