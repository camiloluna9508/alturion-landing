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
      'Diseño y ejecución de obra civil especializada para despliegue de redes de telecomunicaciones y energía, con capacidad para operar en todo tipo de terreno y condición geográfica.',
    capabilities: [
      'Obra civil especializada RETIE',
      'Canalización subterránea y postería',
      'Mampostería estructural y andenes',
      'Cajas de inspección tipo H',
    ],
    specs: [
      { label: 'Capacidad operativa', value: '250+ km' },
      { label: 'Normativa', value: 'NTC-RETIE' },
      { label: 'Monitoreo', value: '24/7' },
      { label: 'Respuesta', value: '≤ 4 horas' },
    ],
  },
  {
    id: 'energia',
    number: '02',
    title: 'Energía',
    icon: Zap,
    color: '#F59E0B',
    description:
      'Diseño, construcción y operación de sistemas eléctricos B.T / M.T y sistemas fotovoltaicos que garantizan suministro confiable bajo normativa RETIE.',
    capabilities: [
      'Subestaciones eléctricas 110kV / 34.5kV',
      'Redes B.T y M.T certificadas',
      'Sistemas fotovoltaicos on-grid / off-grid',
      'Plantas solares flotantes ≥ 1.350 kWp',
    ],
    specs: [
      { label: 'Capacidad instalada', value: '1.350+ kWp' },
      { label: 'Certificación', value: 'ISO 9001' },
      { label: 'Normativa', value: 'RETIE / RETILAP' },
      { label: 'Tolerancia', value: '± 2.5%' },
    ],
  },
  {
    id: 'telecomunicaciones',
    number: '03',
    title: 'Telecomunicaciones',
    icon: Radio,
    color: '#00D4FF',
    description:
      'Despliegue e integración de redes de fibra óptica monomodo, sistemas CCTV IP PoE+ y conectividad 5G Sub-6 GHz para ciudades, empresas y territorios.',
    capabilities: [
      'Fibra óptica monomodo G.652D',
      'CCTV IP PoE+ con analítica',
      'Cableado estructurado Cat6A / Cat7',
      'Conectividad 5G Sub-6 GHz',
    ],
    specs: [
      { label: 'F.O desplegada', value: '2.847+ km' },
      { label: 'Atenuación', value: '≤ 0.35 dB/km' },
      { label: 'Certificación', value: 'OTDR / OLTS' },
      { label: 'SLA uptime', value: '99.7%' },
    ],
  },
  {
    id: 'tecnologia',
    number: '04',
    title: 'Tecnología',
    icon: Cpu,
    color: '#F59E0B',
    description:
      'Integración tecnológica para entornos inteligentes: iluminación DALI, semaforización AUCE, control de acceso biométrico y gestión remota SCADA.',
    capabilities: [
      'Iluminación inteligente DALI / DALI-2',
      'Semaforización AUCE certificada',
      'Control de acceso biométrico',
      'Automatización SCADA / IoT industrial',
    ],
    specs: [
      { label: 'Protocolos', value: 'DALI-2 / BACnet' },
      { label: 'Integración', value: 'SCADA / IoT' },
      { label: 'Monitoreo', value: 'Tiempo real' },
      { label: 'Respuesta', value: '≤ 2 horas' },
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
