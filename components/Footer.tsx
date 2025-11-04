export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="container-max py-12 text-sm text-slate-400 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">HDM Electrical Technology</span>
          <span>•</span>
          <a className="footer-link" href="mailto:contact@hdmtechno.com">contact@hdmtechno.com</a>
        </div>
        <div className="flex items-center gap-4">
          <a className="footer-link" href="#services">Services</a>
          <a className="footer-link" href="#verticals">Sectors</a>
          <a className="footer-link" href="#why">Why HDM</a>
          <a className="footer-link" href="#contact">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} hdmtechno.com</div>
      </div>
    </footer>
  );
}
