'use client'

import React from 'react';
import '../globals.css';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <title>À PROPOS</title>
      <div className="d-flex justify-content-center align-items-center flex-column bg-black vh-100">
        <h1 className="mb-4 display-4 fw-bold text-white">À PROPOS</h1>
      </div>

      {/* Profile Section */}
      <div className="profile-container container py-5">
        <div className="row">
          <div className="profile-header d-flex"></div>
          <div className="profile-photo col-md-3">
            <img
              src="img/Noah.jpeg"
              alt="Photo de profil"
              className="img-fluid"
              style={{ width: '200%', height: '235%', objectFit: 'cover' }}
            />
          </div>
          <div className="profile-text col-md-9">
            <h1>Bonjour,</h1>
            <p>Je suis Noah, photographe et vidéaste amateur, j'étudie à côté en BTS Informatique...</p>
            <p>
              Avant de prendre mon indépendance en photos et en vidéos, j’ai suivis pendant 3 ans en parallèle de mes
              cours, une option cinéma-audiovisuel et j’ai pu réaliser avec des collègues 3 courts métrages et encore
              d’autres que vous retrouverez dans mon portfolio.
            </p>
            <p>
              C’est depuis ma première participation à un festival musical avec du matériel prêté par mon ancien
              établissement que j’ai commencé à prendre des photos seul. Et c’est après avoir vu les résultats de cet
              évènement, et de mes 3 ans d’expériences, que j’ai décidé de prendre mon envol.
            </p>
            <p>
              À travers ce portfolio, vous pourrez suivre mon évolution depuis mes débuts que ce soit en photo ou en
              cinématographie.
            </p>
            <p>
              Je n'ai pas de spécialisation particulière en matière de photographie. Je préfère explorer divers sujets et
              rester polyvalent. Ainsi, vous découvrirez une variété de photos, toutes animées par ma passion. Ces images
              reflètent mon intérêt pour la photographie, vous invitant à vous plonger dans l'univers des photos comme si
              vous en faisiez partie !
            </p>
            <p>Merci de prendre le temps de découvrir mon travail. J'espère que ces images vous transporteront et vous inspireront autant qu'elles l'ont fait pour moi.</p>
            <p>
              Voici aussi mon{' '}
              <a href="http://127.0.0.1:5501" target="_blank" rel="noopener noreferrer">
                Portfolio de Développeur
              </a>
            </p>
            <p>
              <strong>Noah</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
