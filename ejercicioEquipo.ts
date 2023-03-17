
// Clase base para un equipo

class Equipo {  
    descripcion: string;
    fechaFabricacion: Date;
    fechaInstalacion: Date;
  
    constructor(id: string, potenciaHp: number, eficiencia: string, fabricante: string, descripcion: string, fechaFabricacion: Date, fechaInstalacion: Date) {
      super(id, potenciaHp, eficiencia, fabricante);
      this.descripcion = descripcion;
      this.fechaFabricacion = fechaFabricacion;
      this.fechaInstalacion = fechaInstalacion;
    }

    agregarEquipo() {
    
    }
  
    leerEquipo() {

    }
  
    eliminarEquipo() {

    }
  
    editarEquipo() {
    
    }
  }

// Subclase de equipo para un motor
class Motor {
    // Propiedades del motor
    id: string;
    potenciaHp: number;
    eficiencia: string;
    fabricante: string;

    constructor(id: string, potenciaHp: number, eficiencia: string, fabricante: string) {
      this.id = id;
      this.potenciaHp = potenciaHp;
      this.eficiencia = eficiencia;
      this.fabricante = fabricante;
    }

    agregarMotor() {
    
    }
  
    leerMotor() {
    
    }
  
    eliminarMotor() {
    }
  
    editarMotor() {

    } 
    
  }
  
  //Subclase de equipo para bomba
  
class Bomba {

    id: string;
    caudalEntrada: number;
    caudalSalida: number;
    fabricante: string;

    constructor(id: string, caudalEntrada: number, caudalSalida:number, fabricante: string,) {
      this.id = id;
    this.caudalEntrada= caudalEntrada;
      this.caudalSalida = caudalSalida;
      this.fabricante = fabricante;
      
    }
  
    agregarBomba() {
    
    }
  
    leerBomba(id: string) {
    
    }
  
    eliminarBomba(id: string) {
    
    }
  
    editarBomba(id: string, propiedades: any) {
    
    }
  }
  
  // Subclase de equipo para un kit de mangueras
  class KitMangeras extends Motor {
    
    id: string;
    elementos: number;
    medidaPulgadas: number;
    roscasMaterial: string;
  
    constructorsuper(id: string, elementos: number, medidaPulgadas: number, roscasMaterial: string) {
      this.id = id;
      this.elementos = elementos;
      this.medidaPulgadas = medidaPulgadas;
      this.roscasMaterial = roscasMaterial;
    }
  
    agregarKitM() {
      
    }
  
    leerKitM(id: string) {
    
    }
  
    eliminarKitM(id: string) {
    
    }
  
    editarKitM(id: string, propiedades: any) {
    
    }
  }
  
  //Subclase de equipo para Mconbustible
class MCombustible {
    
    id: string;
    cilindros: number;
    tipoCombustible: string;
  
    constructor(id: string, cilindros: number, tipoCombustible: string) {
      this.id = id;
      this.cilindros = cilindros;
      this.tipoCombustible = tipoCombustible;
    }
  
    agregarMotorC() {
          
    }
  
    leerMotorC(id: string) {
    }
  
    eliminarMotorC(id: string) {
    }
  
    editarMotorC(id: string, propiedades: any) {
    }
  }
  // subClase de equipo para M_electrico
class M_electrico {

    id: string;
    voltaje: string;
    consumoKwH: number;
    isBajoConsumo: boolean;

    constructor(id: string, voltaje: string, consumoKwH: number, isBajoConsumo: boolean) {
      this.id = id;
      this.voltaje = voltaje;
      this.consumoKwH = consumoKwH;
      this.isBajoConsumo = isBajoConsumo;
    }

    agregar_motorE() {
    }
  
    leer_motorE(id: string) {
    }
  
    eliminar_motorE(id: string) {
    }
  
    editar_motorE(id: string, propiedades: any) {

    }
  }
  
    
