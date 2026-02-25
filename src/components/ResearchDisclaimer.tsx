import { FlaskConical } from "lucide-react";

const ResearchDisclaimer = () => (
  <section className="py-20 sm:py-28 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/6 rounded-full blur-[140px]" />
    </div>

    <div className="container relative z-10 max-w-3xl mx-auto text-center">
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <FlaskConical size={28} className="text-primary" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-black mb-4">
        O que são <span className="gradient-text">Peptídeos de Pesquisa</span>?
      </h2>
      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8">
        Os peptídeos são cadeias curtas de aminoácidos que desempenham papéis
        essenciais em processos bioquímicos. No ambiente laboratorial, eles são
        utilizados para estudos de sinalização celular, interação molecular,
        farmacologia experimental, biotecnologia e desenvolvimento científico.
      </p>
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm text-muted-foreground leading-relaxed">
        <strong className="text-foreground">⚠️ Aviso importante:</strong> Todos
        os produtos comercializados pela LEAR são destinados{" "}
        <strong className="text-foreground">
          exclusivamente para fins de pesquisa
        </strong>
        . Não se destinam ao consumo humano. Consulte sempre um profissional de
        saúde.
      </div>
    </div>
  </section>
);

export default ResearchDisclaimer;
