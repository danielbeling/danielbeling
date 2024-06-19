import React, { useRef } from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";


const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 560px) {
    flex-direction: column;
    width: 350px;
  }
  @media (max-width: 398px) {
    flex-direction: column;
    width: 280px
  }
  @media (max-width: 328px) {
    flex-direction: column;
    width: 240px;
    
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #33333b;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #33333b;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #33333b;
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid #ccc;
  outline: none;
  font-size: 18px;
  color: #33333b;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #ccc;
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Contact = () => {
  const numberRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = 69993758880;
    const message = messageRef.current.value;
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title style={{ marginTop: '100px' }}>Contato</Title>
        <Desc>
          Sinta-se à vontade para entrar em contato comigo para qualquer dúvida ou oportunidade!
        </Desc>
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Fale comigo <FaWhatsapp style={{ width: '40px', color: 'green' }} /></ContactTitle>
          <ContactInputMessage placeholder="Mensagem" name="message" rows={4} ref={messageRef} required />
          <ContactButton type="submit" value="Enviar" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
