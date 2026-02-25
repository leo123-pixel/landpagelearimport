import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é Água Bacteriostática?",
    a: "É uma água estéril com agente bacteriostático (álcool benzílico 0,9%) usada para reconstituir peptídeos liofilizados com segurança. Ela inibe o crescimento bacteriano e permite múltiplas aplicações do mesmo frasco.",
  },
  {
    q: "Para que serve o BPC-157?",
    a: "O BPC-157 é um peptídeo amplamente estudado por seu potencial de suporte à recuperação tecidual, cicatrização e saúde gastrointestinal. É utilizado em contextos de pesquisa científica.",
  },
  {
    q: "Como é feita a entrega?",
    a: "Enviamos para todo o Brasil com embalagem discreta e segura. Utilizamos transportadoras confiáveis para garantir a integridade dos produtos durante o transporte.",
  },
  {
    q: "Os produtos são seguros e de qualidade?",
    a: "Sim. Trabalhamos apenas com fornecedores certificados e todos os produtos passam por rigoroso controle de qualidade, garantindo alta pureza e confiabilidade.",
  },
  {
    q: "Como entro em contato para fazer um pedido?",
    a: "Você pode nos contatar diretamente pelo WhatsApp clicando no botão de contato em nosso site. Respondemos rapidamente e auxiliamos em todo o processo de compra.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 sm:py-28 bg-secondary/30">
    <div className="container max-w-3xl">
      <h2 className="text-3xl sm:text-4xl font-black text-center mb-14">
        Perguntas <span className="gradient-text">Frequentes</span>
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-xl border border-border px-6"
          >
            <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
