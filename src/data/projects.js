const projects = [
  {
    id: 1,
    title: 'Rediseño App Bancaria',
    description: 'Mejora de la experiencia de usuario para una aplicación bancaria digital',
    category: 'UX/UI Design',
    image: 'https://via.placeholder.com/800x450.png?text=Redise%C3%B1o+App+Bancaria',
    problem: 'Los usuarios experimentaban dificultades para completar transacciones básicas y reportaban confusión en la navegación.',
    solution: 'Implementación de un nuevo sistema de navegación intuitivo y rediseño del flujo de transacciones con feedback visual claro.',
    process: [
      'Investigación con usuarios mediante entrevistas y pruebas de usabilidad',
      'Análisis de patrones de uso y puntos de dolor',
      'Creación de wireframes y prototipos interactivos',
      'Pruebas A/B para validar soluciones'
    ],
    results: [
      'Reducción del 40% en tiempo de completación de tareas',
      'Aumento del 25% en satisfacción del usuario',
      'Disminución del 60% en llamadas al soporte técnico'
    ],
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL'
  },
  {
    id: 2,
    title: 'Plataforma E-learning',
    description: 'Diseño de plataforma educativa centrada en la experiencia de aprendizaje',
    category: 'UX Research & Design',
    image: 'https://via.placeholder.com/800x450.png?text=Plataforma+E-learning',
    problem: 'Baja retención de estudiantes y dificultad para seguir el progreso del aprendizaje.',
    solution: 'Desarrollo de un sistema de aprendizaje gamificado con tracking de progreso personalizado.',
    process: [
      'Workshops con educadores y estudiantes',
      'Mapeo de journey del estudiante',
      'Prototipado de funcionalidades clave',
      'Testing con usuarios reales'
    ],
    results: [
      'Incremento del 55% en engagement estudiantil',
      'Mejora del 35% en completación de cursos',
      'Satisfacción de usuario del 4.8/5'
    ],
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL'
  },
  {
    id: 3,
    title: 'Dashboard Analítico',
    description: 'Sistema de métricas para producto digital',
    category: 'Analítica & UX',
    image: 'https://via.placeholder.com/800x450.png?text=Dashboard+Anal%C3%ADtico',
    problem: 'Falta de visibilidad sobre KPIs importantes para el negocio.',
    solution: 'Creación de dashboards interactivos que conectan datos de producto y negocio.',
    process: ['Data discovery', 'Wireframes', 'Prototipado', 'Test con usuarios'],
    results: ['KPIs centralizados', 'Decisiones basadas en datos'],
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL'
  },
  {
    id: 4,
    title: 'Portal de Onboarding',
    description: 'Experiencia de incorporación para nuevos usuarios',
    category: 'UX Design',
    image: 'https://via.placeholder.com/800x450.png?text=Portal+de+Onboarding',
    problem: 'Alta tasa de abandono en el primer uso.',
    solution: 'Simplificación del flujo de registro y guías contextuales.',
    process: ['Mapeo de customer journey', 'Prototipos', 'Validación'],
    results: ['Reducción del churn inicial', 'Mejor engagement'],
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL'
  },
  {
    id: 5,
    title: 'E-commerce Mobile',
    description: 'Rediseño de la app de compras móviles',
    category: 'UI/UX',
    image: 'https://via.placeholder.com/800x450.png?text=E-commerce+Mobile',
    problem: 'Baja conversión en mobile checkout.',
    solution: 'Optimización del flujo de pago y microinteracciones.',
    process: ['Análisis de funnel', 'Prototipos', 'Pruebas de usabilidad'],
    results: ['Aumento de conversión', 'Mejor satisfacción'],
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL'
  },
  {
    id: 6,
    title: 'Sistema de Notificaciones',
    description: 'Diseño de estrategia de notificaciones personalizadas',
    category: 'Product Design',
    image: 'https://via.placeholder.com/800x450.png?text=Sistema+de+Notificaciones',
    problem: 'Notificaciones irrelevantes que molestaban a usuarios.',
    solution: 'Segmentación y personalización basada en comportamiento.',
    process: ['Research', 'Prototipado', 'Testing'],
    results: ['Mejor open rate', 'Menos churn'],
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL'
  },
  {
    id: 7,
    title: 'Rediseño Web Corporativa',
    description: 'Sitio institucional con foco en conversión',
    category: 'UI Design',
    image: 'https://via.placeholder.com/800x450.png?text=Redise%C3%B1o+Web+Corporativa',
    problem: 'Mensajes poco claros y baja conversión de leads.',
    solution: 'Arquitectura de información y nuevos patrones visuales.',
    process: ['Workshops', 'Wireframes', 'UI Kit'],
    results: ['Aumento de leads', 'Mejor percepción de marca'],
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL'
  },
  {
    id: 8,
    title: 'App Salud',
    description: 'Producto de salud digital centrado en el usuario',
    category: 'UX Research',
    image: 'https://via.placeholder.com/800x450.png?text=App+Salud',
    problem: 'Dificultad en seguimiento de hábitos de salud.',
    solution: 'Diseño de trackers y recordatorios sencillos.',
    process: ['Entrevistas', 'Prototipos', 'Pilot tests'],
    results: ['Mejora en adherencia de usuarios', 'Feedback positivo'],
    figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL'
  }
];

export default projects;
