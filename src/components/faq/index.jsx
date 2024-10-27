import React, { useState } from "react";
import "./index.scss"; // Vamos usar um arquivo CSS externo para o estilo

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado aberto/fechado
  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq"> 
        
    <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={toggleFAQ}>
        
      <div className="faq-question">
        <h3>{question}</h3>
        <span className="faq-icon">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
    </div>

  );
}

function FAQList() {
  const faqs = [
    { question: "Como posso dar um visual mais profissional ao meu site?", answer: "Ao desenvolver ums site é importante se atentar nas suas referencias e objetivos, para entao ecoçher umtemplate que mellhor atende as suas expectativas de design," },
    { question: "Como posso encontrar um designer profissional para me ajudar a criar meu site?", answer: "Um site com um bom design é fundamental para seu sucesso online, pois estabelece sua credibilidade e passa uma imagem mais profissional. É por isso que é tão importante reservar um tempo para encontrar bons exemplos e aprender com eles. Certamente vai encontrar alguns que atendem seus objetivos ou necessidades comerciais." },
    { question: "Como posso criar o design do meu site sem prejudicar seu desempenho?", answer: "A Valhalla possui uma infraestrutura robusta e focada na performance para que seu site esteja equipado com todos os recursos necessários para gerenciar ativamente o seu desempenho. Ao criar seu site e procurar por tendências de design, lembre-se que adicionar muitos elementos de design pode aumentar o seu tempo de carregamento. Por esse motivo, os sites com os melhores designs não usam muitas imagens, vídeos e fontes diferentes." },
    { question: "Quem pode se beneficiar dos sites inspiradores?", answer: "Qualquer pessoa que esteja criando uma presença online pode recorrer aos sites inspiradores. Não importa se você está criando por conta própria ou seja um profissional em web design, criar um site atraente e bem elaborado pode impulsionar seu sucesso online. " },
  ];

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FAQList;
