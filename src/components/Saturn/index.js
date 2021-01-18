export default function componentDidMount() {
  const script = document.createElement("script");
  script.src = "/static/libs/your_script.js";
  script.async = true;
  script.onload = () => this.scriptLoaded();

  document.body.appendChild(script);
};
