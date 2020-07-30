class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Lizbeth Joselin Muñoz Vazquez.`;
    }
}
customElements.define("mi-footer", MiFooter);