import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function List() {
    
    const teamMembers = [
        { name: "Renan", role: "Sócio Comercial" },
        { name: "Henrique", role: "Sócio Gestor Operacional" },
        { name: "Danilo", role: "Administrativo/Financeiro" },
        { name: "Fabrício", role: "Gestor de Contas e Experiência" },
        { name: "Luís", role: "Gestor de Tráfego e Performance" },
        { name: "Arthur", role: "Analista de Oportunidades" },
        { name: "Talita", role: "Analista de Oportunidades" },
        { name: "Juliana", role: "Analista de Oportunidades" },
        { name: "Theo", role: "Designer" },
        { name: "Raquel", role: "Editora de Vídeo" },
        { name: "Bruno", role: "Desenvolvedor" }
    ];

    useEffect(() => {
        gsap.fromTo('.team-member', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".team-list",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    return (
        <div className="team-list w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-2xl font-[SansitaBold] text-gray-800 mb-2">{member.name}</h3>
                        <p className="text-lg font-[Sansita] text-gray-600">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;