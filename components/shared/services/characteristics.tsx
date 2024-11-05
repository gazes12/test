
import { ICharacteristic } from "../includes/types";

export function Characteristics(props: ICharacteristic[]) {
    console.log(props);
    /*     return (
            <div className="characteristics">
                {
                    items.map(({ name, value, icon }, key) => (
                        <div className="characteristic">
                            <div dangerouslySetInnerHTML={{ __html: icon }} className="characteristic__icon">
                            </div>
    
                            <span>{name} : {value}.</span>
                        </div>
                    ))
                }
            </div>
        ); */
}
