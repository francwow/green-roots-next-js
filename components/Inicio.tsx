import { setHoverLink, setLanguage } from "../types/Types";
import Social from "./Social";
import InicioNav from "./InicioNav";
import Logo from "./Logo";
import Languages from "./Languages";
import TiendaIcons from "./TiendaIcons";

type Inicio = {
  setHoverLink: setHoverLink;
  setLanguage: setLanguage;
};

const Inicio = (props: Inicio) => {
  const { setHoverLink, setLanguage } = props;

  return (
    <div className="inicio-modal container-flex-column">
      <Logo />
      <InicioNav setHoverLink={setHoverLink} />
      <Languages
        setHoverLink={setHoverLink}
        inicio={true}
        setLanguage={setLanguage}
      />
      <Social setHoverLink={setHoverLink} />
    </div>
  );
};

export default Inicio;
