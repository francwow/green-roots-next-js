import Social from "./Social";
import InicioNav from "./InicioNav";
import Logo from "./Logo";
import Languages from "./Languages";

const Inicio = () => {
  return (
    <div className="inicio-modal container-flex-column">
      <Logo />
      <InicioNav />
      <Languages inicio={true} />
      <Social />
    </div>
  );
};

export default Inicio;
