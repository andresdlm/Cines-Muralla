create table combos (
    id int auto_increment primary key,
    nombre_combo varchar(200) not null,
    created_at timestamp default CURRENT_TIMESTAMP null
);

create table comidas (
    id int auto_increment primary key,
    nombre_comida varchar(200) not null,
    categoria varchar(200) not null,
    created_at timestamp default CURRENT_TIMESTAMP null
);

create table contenido_combos (
    id_combo  int not null,
    id_comida int not null,
    cantidad  int not null,
    primary key (id_combo, id_comida),
    constraint contenido_combos_ibfk_1
        foreign key (id_combo) references combos (id),
    constraint contenido_combos_ibfk_2
        foreign key (id_comida) references comidas (id)
);

create index id_comida
    on contenido_combos (id_comida);

create table fact_sales (
    id int auto_increment primary key,
    fh_compra timestamp default CURRENT_TIMESTAMP null
);

create table compra_combos (
    id_fact  int not null,
    id_combo int not null,
    cantidad int not null,
    primary key (id_fact, id_combo),
    constraint compra_combos_ibfk_1
        foreign key (id_fact) references fact_sales (id),
    constraint compra_combos_ibfk_2
        foreign key (id_combo) references combos (id)
);

create index id_combo
    on compra_combos (id_combo);

create table compra_comida (
    id_fact   int not null,
    id_comida int not null,
    cantidad  int not null,
    primary key (id_fact, id_comida),
    constraint compra_comida_ibfk_1
        foreign key (id_fact) references fact_sales (id),
    constraint compra_comida_ibfk_2
        foreign key (id_comida) references comidas (id)
);

create index id_comida
    on compra_comida (id_comida);

create table peliculas (
    id int auto_increment primary key,
    nombre_pelicula varchar(200) not null,
    genero varchar(100) not null,
    descripcion varchar(1000) not null,
    fecha_estreno date not null,
    duracion int not null,
    created_at timestamp default CURRENT_TIMESTAMP null
);

create table datos_peliculas (
    id int auto_increment primary key,
    id_pelicula int not null,
    idioma varchar(100) not null,
    subtitulos varchar(100) not null,
    censura varchar(50) not null,
    created_at timestamp default CURRENT_TIMESTAMP null,
    constraint datos_peliculas_ibfk_1
        foreign key (id_pelicula) references peliculas (id)
);

create index id_pelicula
    on datos_peliculas (id_pelicula);

create table sedes (
    id int auto_increment primary key,
    nombre_fiscal varchar(180) not null,
    ubicacion varchar(255) not null,
    hora_apertura time not null,
    hora_cierre time not null,
    created_at timestamp default CURRENT_TIMESTAMP null
);

create table carteleras (
    id_sede int not null,
    id_datos_pelicula int not null,
    activa varchar(10) not null,
    created_at timestamp default CURRENT_TIMESTAMP null,
    primary key (id_sede, id_datos_pelicula),
    constraint carteleras_ibfk_1
        foreign key (id_sede) references sedes (id),
    constraint carteleras_ibfk_2
        foreign key (id_datos_pelicula) references datos_peliculas (id)
);

create index id_datos_pelicula
    on carteleras (id_datos_pelicula);

create table salas (
    id int auto_increment primary key,
    id_sede int not null,
    tipo_sala varchar(100) not null,
    tecnologia varchar(30) not null,
    created_at timestamp default CURRENT_TIMESTAMP null,
    numero_sala int not null,
    constraint salas_ibfk_1
        foreign key (id_sede) references sedes (id)
);

create table funciones (
    id int auto_increment primary key,
    id_sala int not null,
    id_datos_pelicula int not null,
    fecha_funcion datetime not null,
    created_at timestamp default CURRENT_TIMESTAMP null,
    constraint funciones_ibfk_1
        foreign key (id_sala) references salas (id),
    constraint funciones_ibfk_2
        foreign key (id_datos_pelicula) references datos_peliculas (id)
);

create index id_datos_pelicula
    on funciones (id_datos_pelicula);

create index id_sala
    on funciones (id_sala);

create table mapa_salas (
    id int auto_increment primary key,
    id_sala int not null,
    cant_filas int not null,
    cant_columnas int not null,
    created_at timestamp default CURRENT_TIMESTAMP null,
    constraint mapa_salas_ibfk_1
        foreign key (id_sala) references salas (id)
);

create index id_sala
    on mapa_salas (id_sala);

create table reservas (
    id int auto_increment primary key,
    id_funcion int not null,
    butacas varchar(200) not null,
    created_at timestamp default CURRENT_TIMESTAMP null,
    constraint reservas_ibfk_1
        foreign key (id_funcion) references funciones (id)
);

create table compra_reservas (
    id_fact int not null,
    id_reserva int not null,
    created_at timestamp default CURRENT_TIMESTAMP null,
    primary key (id_fact, id_reserva),
    constraint compra_reservas_ibfk_1
        foreign key (id_fact) references fact_sales (id),
    constraint compra_reservas_ibfk_2
        foreign key (id_reserva) references reservas (id)
);

create index id_reserva
    on compra_reservas (id_reserva);

create index id_funcion
    on reservas (id_funcion);

create index id_sede
    on salas (id_sede);