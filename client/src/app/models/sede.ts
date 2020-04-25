import { Time } from '@angular/common';

export interface Sede {
    id?: number;
    nombre_fiscal?: String;
    ubicacion?: String;
    hora_apertura?: Time;
    hora_cierre?: Time;
    created_at?: Date;
}