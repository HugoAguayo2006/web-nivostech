import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Navbar.css";

const Navbar = () => {
  const { t } = useTranslation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileMenuKey, setMobileMenuKey] = useState(null);
  const location = useLocation();
  const isMobileMenuOpen = mobileMenuKey === location.key;
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleMouseEnter = () => {
    // Cancelar cualquier timeout pendiente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    // Agregar un delay antes de cerrar
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 200ms de delay
  };

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuKey(isMobileMenuOpen ? null : location.key);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMobileMenuKey(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Overlay difuminado para el área superior */}
      <div className="top-blur-overlay"></div>
      
      {/* Overlay para menú móvil */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuKey(null)}
        ></div>
      )}
      
      <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <Link to="/" className="logo">
          <img src="/logos/logonivos3.webp" alt="" className="logo-left" />
          <span className="logo-wordmark">NIVOSTECH</span>
        </Link>

        {/* Botón hamburguesa para móvil */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? t("Cerrar menú") : t("Abrir menú")}
          aria-expanded={isMobileMenuOpen}
          aria-controls="navbar-links"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      <div id="navbar-links" className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <Link
          to="/"
          className={isActive("/") ? "nav-link active" : "nav-link"}
          onClick={() => setMobileMenuKey(null)}
        >{t("Inicio")}</Link>

        <Link
          to="/proyectos"
          className={isActive("/proyectos") ? "nav-link active" : "nav-link"}
          onClick={() => setMobileMenuKey(null)}
        >{t("Nuestros Proyectos")}</Link>

        <Link
          to="/nosotros"
          className={isActive("/nosotros") ? "nav-link active" : "nav-link"}
          onClick={() => setMobileMenuKey(null)}
        >{t("Nosotros")}</Link>

        <div
          ref={dropdownRef}
          className="nav-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="dropdown-toggle-wrapper">
            <Link
              to="/servicios"
              className={`nav-link dropdown-link ${
                location.pathname.startsWith("/servicios") ? "active" : ""
              }`}
              onClick={(e) => {
                // Si se hace clic en la flecha, prevenir navegación y abrir dropdown
                if (e.target.closest('.dropdown-arrow')) {
                  e.preventDefault();
                  setIsServicesOpen(!isServicesOpen);
                } else {
                  // Si se hace clic en el texto, navegar normalmente
                  setIsServicesOpen(false);
                  setMobileMenuKey(null);
                }
              }}
            >{t("Servicios")}<span
                className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                }}
              >
                ▼
              </span>
            </Link>
          </div>

          {isServicesOpen && (
            <div 
              className="dropdown-menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/servicios/plan-1"
                className="dropdown-item"
                onClick={() => {
                  setIsServicesOpen(false);
                  setMobileMenuKey(null);
                }}
              >{t("Sitio web simple")}</Link>
              <Link
                to="/servicios/plan-2"
                className="dropdown-item"
                onClick={() => {
                  setIsServicesOpen(false);
                  setMobileMenuKey(null);
                }}
              >{t("Sitio web complejo")}</Link>

              <Link
                to="/servicios/plan-3"
                className="dropdown-item"
                onClick={() => {
                  setIsServicesOpen(false);
                  setMobileMenuKey(null);
                }}
              >{t("Sitio + Redes Sociales")}</Link>

              <Link
                to="/servicios/plan-menu"
                className="dropdown-item"
                onClick={() => {
                  setIsServicesOpen(false);
                  setMobileMenuKey(null);
                }}
              >{t("Menú Digital")}</Link>
            </div>
          )}
        </div>

        <Link
          to="/contacto"
          className={isActive("/contacto") ? "nav-link active" : "nav-link"}
          onClick={() => setMobileMenuKey(null)}
        >{t("Contacto")}</Link>
        <div className="nav-language-mobile">
          <LanguageSwitcher />
        </div>
      </div>

      <div className="nav-actions">
        <div className="nav-language-desktop">
          <LanguageSwitcher />
        </div>
        <Link
        to="/contacto"
        className="cta-button"
        onClick={() => setMobileMenuKey(null)}
        >{t("Cotizar Proyecto")}</Link>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

