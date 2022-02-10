import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { useRecoilState } from "recoil";
import { dialogToggle, modalData, modalToggle } from "../../Store/Modal";
import ZenDialog from "../ZenDialog";
import toast from "react-hot-toast";
import { Inertia } from "@inertiajs/inertia";

export default function DoctorTable(props) {
    const [showDialog, setShowDialog] = useRecoilState(dialogToggle);
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const [editData, setEditData] = useRecoilState(modalData);

    const [dialogInfo, setDialogInfo] = useState({
        title: "",
        message: "",
        isConfirm: false,
        id: null,
    });
    const sureDelete = (confirm) => {
        if (confirm) {
            Inertia.post(
                "doctor-delete",
                { id: dialogInfo.id },
                {
                    onSuccess: () => {
                        toast.success("Data terhapus!");
                        setShowDialog(false);
                    },
                    onError: () => {
                        toast.error("Data gagal dihapus!");
                    },
                }
            );
        } else {
            setShowDialog(false);
        }
    };
    const deleteDoctor = (id, name) => {
        setDialogInfo({
            title: "Yakin menghapus?",
            message: "Data yang dihapus tidak dapat dikembalikan. Lanjutkan?",
            isConfirm: true,
            id: id,
        });

        setShowDialog(true);
    };
    return (
        <div className="flex flex-col">
            <ZenDialog
                title={dialogInfo.title}
                message={dialogInfo.message}
                isConfirm={dialogInfo.isConfirm}
                acceptHandler={sureDelete}
            />
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <tbody className="bg-white divide-y divide-gray-200">
                                {props.doctorsData.map((doctor, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {doctor.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {doctor.no_str}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {doctor.gender}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {doctor.specialist}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {doctor.hp}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {doctor.address}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                            <button
                                                onClick={() => {
                                                    setEditData(doctor);
                                                    setShowModal(true);
                                                }}
                                                className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 transition  duration-200"
                                            >
                                                <MdIcons.MdEdit
                                                    size={16}
                                                    className="text-yellow-400"
                                                />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    deleteDoctor(
                                                        doctor.id,
                                                        doctor.name
                                                    );
                                                }}
                                                className="p-2 rounded-lg
                                                bg-red-100 hover:bg-red-200
                                                transition duration-200"
                                            >
                                                <FaIcons.FaTrash
                                                    size={16}
                                                    className="text-red-400"
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
