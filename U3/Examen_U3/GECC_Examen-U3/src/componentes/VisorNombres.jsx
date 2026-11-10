import { useState } from "react";
import { Input } from "./Input";

export function VisorNombres({ datos_api = [] }) {
    const [nombre, setNombre] = useState("");

    const datos_filtrados = Array.isArray(datos_api)
        ? datos_api.filter((user) => {
            const texto = nombre.toLowerCase();
            return (
                user?.name?.toLowerCase().includes(texto) ||
                user?.email?.toLowerCase().includes(texto)
            );
        })
        : [];

    const datos_html = datos_filtrados.map((user) => (
        <div key={user.id}>
            <p>
                Nombre: {user.name}, {user.username} Email: {user.email} phone: {user.phone} web: {user.website}
            </p>
        </div>
    ));

    return (
        <div>
            <div>
                <Input nombre={nombre} setNombre={setNombre} />
            </div>
            <div>{datos_html}</div>
        </div>
    );
}