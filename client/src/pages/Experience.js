import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { IoIosCar } from "react-icons/io";

const iconStyle = {
  fontSize: '3rem',
  color: '#ff6347',
  transition: 'color 0.3s',
};

const skillsData = [
  {
    name: "Best Price",
    icon: <FaCameraRetro style={iconStyle} />,
    link: "#",
    description: "Unbeatable prices for unforgettable city tours!",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: <GiNotebook style={iconStyle} />,
    link: "#",
    description: "Explore cities with speed and safety, guided by Cabventure's expert team.",
    aosDelay: "500",
  },
  {
    name: "Fast and Safe",
    icon: <GiNotebook style={iconStyle} />,
    link: "#",
    description: "Explore cities with speed and safety, guided by Cabventure's expert team.",
    aosDelay: "500",
  },
];

const Experience = () => {
  return (
    <>
      <span id="about"></span>
      <div style={containerStyle}>
        <div style={innerContainerStyle}>
          <div style={headerStyle}>
            <h1 data-aos="fade-up" style={titleStyle}>
              Why Choose Us
            </h1>
          </div>
          <div style={gridStyle}>
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff6347';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#333';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                <div>{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#ff6347';
                  }}
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const containerStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '3.5rem 0',
  minHeight: '600px',
  display: 'grid',
  placeItems: 'center',
};

const innerContainerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
};

const headerStyle = {
  paddingBottom: '3rem',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: '600',
  fontFamily: 'serif',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '1rem',
  '@media(min-width: 640px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media(min-width: 768px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
};

const cardStyle = {
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#333',
  transition: 'background-color 0.3s, color 0.3s',
  color: '#fff',
  borderRadius: '0.5rem',
  cursor: 'pointer',
};

const linkStyle = {
  display: 'inline-block',
  fontSize: '1.125rem',
  fontWeight: '600',
  padding: '0.75rem 0',
  color: '#ff6347',
  transition: 'color 0.3s',
};

export default Experience;
