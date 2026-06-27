import {
  Building2,
  Zap,
  Radio,
  Cpu,
  PencilRuler,
  ClipboardCheck,
  Search,
  BarChart3,
} from 'lucide-react';

export const verticals = [
  {
    id: 'infraestructura',
    number: '01',
    title: 'Infraestructura',
    icon: Building2,
    color: '#00D4FF',
    description:
      'La base física de todo proyecto. Diseñamos y ejecutamos obras civiles especializadas para el despliegue de redes, con capacidad técnica para operar en todo tipo de terreno.',
    capabilities: [
      'Obra civil especializada',
      'Canalización y postes',
      'Mampostería y andenes',
      'Cajas de inspección',
    ],
  },
  {
    id: 'energia',
    number: '02',
    title: 'Energía',
    icon: Zap,
    color: '#F59E0B',
    description:
      'Diseño, construcción y operación de sistemas eléctricos que garantizan suministro confiable y eficiente, en cumplimiento de la normativa nacional.',
    capabilities: [
      'Subestaciones eléctricas',
      'Redes B.T y M.T',
      'Energía solar fotovoltaica',
      'Plantas solares flotantes',
    ],
  },
  {
    id: 'telecomunicaciones',
    number: '03',
    title: 'Telecomunicaciones',
    icon: Radio,
    color: '#00D4FF',
    description:
      'Despliegue e integración de redes que conectan ciudades, empresas y territorios. Desde la fibra óptica hasta los sistemas de videovigilancia urbana.',
    capabilities: [
      'Fibra óptica y empalmerería',
      'CCTV y videovigilancia',
      'Cableado estructurado',
      'Conectividad 5G',
    ],
  },
  {
    id: 'tecnologia',
    number: '04',
    title: 'Tecnología',
    icon: Cpu,
    color: '#F59E0B',
    description:
      'Integración tecnológica para entornos inteligentes, automatización industrial y gestión remota de infraestructura esencial.',
    capabilities: [
      'Iluminación inteligente DALI',
      'Semaforización AUCE',
      'Control de acceso',
      'Automatización industrial',
    ],
  },
];

export const professionalServices = [
  {
    icon: PencilRuler,
    title: 'Diseño e Ingeniería',
    description: 'Diseños técnicos y de detalle con rigor normativo.',
  },
  {
    icon: ClipboardCheck,
    title: 'Interventoría',
    description: 'Supervisión técnica y administrativa de proyectos.',
  },
  {
    icon: Search,
    title: 'Consultoría y Auditoría',
    description: 'Evaluación técnica y financiera especializada.',
  },
  {
    icon: BarChart3,
    title: 'Evaluación Financiera',
    description: 'Análisis de viabilidad y retorno de proyectos.',
  },
];

export const pillars = [
  {
    number: '01',
    title: 'Calidad',
    items: [
      'Procesos documentados',
      'Entregables auditables',
      'Planes de calidad',
      'Cumplimiento normativo',
    ],
  },
  {
    number: '02',
    title: 'Seguridad',
    items: [
      'Personal certificado',
      'Protocolos de trabajo',
      'SG-SST',
      'Planes de emergencia',
    ],
  },
  {
    number: '03',
    title: 'Sostenibilidad',
    items: [
      'Manejo ambiental',
      'Prácticas responsables',
      'Eficiencia energética',
      'Disposición adecuada',
    ],
  },
];
