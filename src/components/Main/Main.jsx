import s from "./Main.module.scss";

function Main() {
  return (
    <>
      <main className={s.main}>
        <section class={s.apresentacao}>
          <h1 className={s.titulo}>
            Unidos pela Solidariedade: Encontre Abrigos e Voluntários em
            Momentos de Enchente
          </h1>
          <p>
            Bem-vindo ao nosso portal. Aqui você encontra locais seguros e
            voluntários dedicados prontos para ajudar quando mais precisar.
            Porque em tempos difíceis, a união faz toda a diferença.
          </p>
        </section>
        <h1>Serviços que prestamos e fazemos para a comunidade.</h1>
        <section className={s.servicos}>
          <div className={s.servico}>
            <h2>Apoio com Propósito</h2>
            <p>
              Nosso compromisso é conectar pessoas a lugares de segurança e
              auxílio, garantindo que ninguém fique desamparado durante uma
              enchente. Trabalhamos com dedicação para levar esperança e
              proteção às famílias atingidas.
            </p>
          </div>

          <div className={s.servico}>
            <h2>Uma Rede de Cuidado</h2>
            <p>
              Contamos com uma comunidade engajada de voluntários e abrigos
              preparados para oferecer suporte imediato. Do acolhimento à
              reconstrução, estamos ao seu lado em cada etapa.
            </p>
          </div>
          <div className={s.servico}>
            <h2>Recruta os voluntarios mais esperientes</h2>
            <p>
              Recrutamos os melhores voluntarios para prestar os serviços de
              melhor qualidade. Para garantir a segurança e o bem-estar de
              todos.
            </p>
          </div>
          <div className={s.servico}>
            <h2>Selecionamos os melhores lugares</h2>
            <p>
              Selecionamos os melhores lugares onde vc possa ficar com qualidade
              e que possa tirar o profeito para melhor oportunidade e comforto.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
