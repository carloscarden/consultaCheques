export class DetallesCheque {

	/*
	 * no dependen de real o interino
	 */
	periodo: string;
	documento: string;
	secuencia: string;
	dopag: string;
	apellidoNombre: string;
	antiguedad: string;

	reg: string;
	rev: string;
	nrocheq: string;
	movilidad : string;
	presentismo : string;
	inasistencias : string;
	foja : string;
	cargo : string;
	fechaAfec : string;
	cuitCuil : string;
	sexo : string;
	opid : string;
	item : string;
	apartado: string;
	nopagado : string;

	/*
	 * datos reales
	 */

	dep_r: string;
	disNombre_r: string;
	disNro_r: string;
	tor_r : string;
	escu_r : string;
	rural_r: string;
	caracteristicas_r: string;
	secciones_r : string;
	turnos_r : string;
	hs_r : string;
	dobleEscolaridadEstab_r: string;
	subvencion_r: string;
	categoria_r: string;
	codMov_r: string;
	dobleEscolaridadCargo_r: string;

	/*
	 * datos interinos
	 */
	dep_i: string;
	disNombre_i: string;
	disNro_i: string;
	tor_i: string;
	escu_i: string;
	rural_i: string;
	secciones_i: string;
	turnos_i: string;
    hs_i: string;
	caracteristicas_i: string;
	dobleEscolaridadEstab_i: string;
	subvencion_i: string;
	categoria_i: string;
	codMov_i: string;
	dobleEscolaridadCargo_i : string;

	/*
	 * datos estab articulados
	 */
	dep_a: string;
	disNombre_a: string;
	disNro_a: string;
	tor_a: string;
	escu_a: string;
	caracteristicas_a: string;
	dobleEscolaridadEstab_a: string;
	rural_a: string;
	subvencion_a: string;

	liquido: string;
	fpago: string;

}
