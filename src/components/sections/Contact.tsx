import { contactLinks } from '../../data/contact';

const Contact = () => {
  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'text-blue-500',
      cyan: 'text-cyan-500',
      green: 'text-green-500',
      gray: 'text-gray-400'
    };
    return colorMap[color] || 'text-primary';
  };

  return (
    <section className="py-20 relative overflow-hidden" id="contacto">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Conectemos
          </h2>
          
          <p className="text-gray-500 max-w-lg mx-auto mb-10">
            ¿Tienes un proyecto en mente o quieres charlar?
            <br />
            Estoy disponible a través de las siguientes plataformas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {contactLinks.map((contact) => (
              <a
                key={contact.id}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="group flex items-center p-4 rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-200/30 dark:bg-gray-800/30 flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                  <i className={`${contact.icon} ${getColorClass(contact.color)}`}></i>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {contact.name}
                  </h4>
                  <p className="text-sm text-gray-500">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;