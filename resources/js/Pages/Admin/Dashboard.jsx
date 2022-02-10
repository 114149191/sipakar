import React from "react";
import Statistic from "../../Components/Admin/Statistic";
import Admin from "../../Layouts/Admin";

export default function Dashboard() {
    return (
        <Admin judul="Dashboard">
            <div>
                <Statistic />
            </div>
        </Admin>
    );
}
