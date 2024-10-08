import logo from "../img/paypal_logo.png"
import './Modal.scss'
export function Modal ({open,onClose}) {
    if(!open) return null;
    return (<section className="contenedor" onClick={onClose}>
                <div className="sub-contenedor" onClick={(e)=>{
                    e.stopPropagation();
                }}>
                    <div className="contenido">
                            <div className="icon">
                            <img src={logo} width="48" />
                            </div>
                            <div className="mensaje">
                                <div className="title">
                                    <h3>Pago Realizado con exito</h3>
                                    <div className="text">
                                        Gracias por su preferencia
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="actions">
                        <button className="btn-descargar" >Descargar</button>
                        <button className="btn-volver" onClick={onClose}>Volver</button>
                    </div>
                </div>
    </section>);
}
