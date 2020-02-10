let defaultState = {
    loading: false,
    cliente: {},
    clientes: [
        {
            nombre: "Cristhian Lopez",
            foto: "",
            correo: "thianlopezz@gmail.com",
            numero: "0990901765",
            etiqueta: ["react", "contactado"]
        },
        {
            nombre: "Ricardo García",
            foto: "",
            correo: "ragseg@donargento.com",
            numero: "0998562048",
            etiqueta: ["power-bi"]
        },
        {
            nombre: "Paula Iniguez",
            foto: "",
            correo: "hol@ecudevs.com",
            numero: "0993648292",
            etiqueta: ["python"]
        }
    ]
};

const clienteReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SAVE_CLIENTE":
            return { ...state, loading: true, clientes: [...state.clientes, action.cliente] };
        default:
            return { ...state };
    }
};
export default clienteReducer;

