import React from 'react';
import { Transition } from '@headlessui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import darioImage from '../assets/img/aboutus/darioabout.jpg';
import fedeImage from '../assets/img/aboutus/fedeabout.jpg';
import crisImage from '../assets/img/aboutus/crisabout.jpg';

export const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Federico Jose Mansilla',
      role: 'Co-CEO',
      titulo: 'Scrum Master & Developer',
      description: 'Experto en estrategia empresarial y liderazgo.',
      image: fedeImage,
    },
    {
      id: 2,
      name: 'Cristhian Rodrigo Sosa Zurita',
      role: 'Co-CEO',
      titulo: 'Systems Engineer & Full Stack Developer',
      description: 'Desarrollador full-stack apasionado por la innovación tecnológica.',
      image: crisImage,
    },
    {
      id: 3,
      name: 'Dario Ezequiel Cabrera',
      role: 'Co-CEO',
      titulo: 'Project Manager & Developer',
      description: 'Gestor de proyectos con amplia experiencia en el sector.',
      image: darioImage,
    },
  ];

  const mission = "Nuestra misión es proporcionar medicina preparada de la más alta calidad, garantizando la salud y el bienestar de nuestros pacientes.";
  const vision = "Nuestra visión es ser líderes en la industria de cobertura de salud, innovando constantemente para mejorar la vida de las personas.";
  const commitment = "Nos comprometemos a cumplir con los más altos estándares éticos y a contribuir positivamente a la sociedad.";

  const metrics = [
    { name: "Índice de satisfacción del cliente", value: "95%" },
    { name: "Porcentaje de productos sin quejas", value: "98%" },
    { name: "Tasa de retención de empleados", value: "90%" },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Ana Martínez',
      comment: 'Estoy encantada con los planes de Medical Rolling. ¡Me han cambiado la vida!',
    },
    {
      id: 2,
      name: 'Carlos López',
      comment: 'Gracias a la cobertura de Medical Rolling, he recuperado mi salud de una manera rápida y eficaz.',
    },
    {
      id: 3,
      name: 'Laura Fernández',
      comment: 'Los planes de Medical Rolling son de alta calidad y totalmente recomendables.',
    },
  ];

  return (
    <div className="bg-w justify-center">
      <section className="justify-center mx-auto p-12 w-full" style={{ backgroundImage: 'url("https://haynoticia.es/wp-content/uploads/2017/12/hospital.jpg")', backgroundColor: 'rgba(0, 0, 0, 0, 0.5)' }}>
        <h1 className="text-4xl font-bold text-center text-w mb-8">Medical Rolling</h1>
        <p className="text-lg text-w mb-8 text-center font-medium">{mission}</p>
        <p className="text-lg text-w mb-8 text-center font-medium">{vision}</p>
        <p className="text-lg text-w mb-8 text-center font-medium">{commitment}</p>
        <h2 className="text-2xl font-bold mb-4 text-center">Métricas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map(metric => (
            <div
              key={metric.name}
              className="p-4 bg-white text-c rounded-lg shadow-md flex flex-col items-center"
            >
              <p className="text-xl font-bold mb-2">{metric.name}</p>
              <p className="text-2xl text-ts">{metric.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-hb py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-w">Testimonios</h2>
          <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-md">
                <p className="text-lg text-c font-medium mb-4">"{testimonial.comment}"</p>
                <p className="text-xl font-bold">{testimonial.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Acerca de Nosotros</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map(member => (
          <Transition
            key={member.id}
            show={true}
            as="div"
            className="p-6 bg-white rounded-lg shadow-md"
            enter="transition ease-out duration-300 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="flex justify-center mb-4">
              <img src={member.image} alt={member.name} className="w-40 h-40 mx-auto rounded-full object-cover" />
            </div>
            <h2 className="text-xl font-bold mb-2 text-center">{member.name}</h2>
            <p className="text-gray-600 mb-4 text-center">{member.role}</p>
            <p className="text-c font-medium text-center">{member.titulo}</p>
            <p className="text-gray-700 text-center">{member.description}</p>
          </Transition>
        ))}
      </div>
    </section>
    </div>
  );
};

