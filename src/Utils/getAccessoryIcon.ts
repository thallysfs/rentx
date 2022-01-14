import SpeedtSvg from '../assets/speed.svg';
import AccelerationtSvg from '../assets/acceleration.svg';
import ForceSvg from '../assets/force.svg';
import GasolineSvg from '../assets/gasoline.svg';
import ExchangeSvg from '../assets/exchange.svg';
import PeopletSvg from '../assets/people.svg';
import EnergySvg from '../assets/energy.svg';
import Hybrid from '../assets/hybrid.svg';
import CarSvg from '../assets/car.svg';

export function getAccessoryIcon(type: string) {
    switch (type) {
        case 'speed': return SpeedtSvg;
        case 'acceleration': return AccelerationtSvg;
        case 'turning_diameter': return ForceSvg;
        case 'gasoline_motor': return GasolineSvg;
        case 'exchange': return ExchangeSvg;
        case 'seats': return PeopletSvg;
        case 'electric_motor': return EnergySvg;
        case 'hybrid_motor': return Hybrid;
        
        default:
            return CarSvg;
    }
}

