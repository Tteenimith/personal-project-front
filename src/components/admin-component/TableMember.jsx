import React, { useEffect, useState } from "react";
import { listMember, updateMember, removeMember } from "../../api/member";
import useAuthStore from "../../store/auth-store";
import { toast } from "react-toastify";

const TableMember = () => {
  const [member, setMember] = useState([]);
  //zustand
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const reps = await listMember();
      console.log(reps.data)
      setMember(reps.data);
    } catch (err) {
      console.log(err);
    }
  };
  const hdlRemove = async (id) => {
    try {
      const resp = await removeMember(token, id);
      toast.error("Delete Complete");
      getData();
    } catch (err) {
      console.log(err);
    }
  };
  const hdlUpdate = async (e, id) => {
    const role = e.target.value;
    const body = {
        [e.target.name]:e.target.value
    }
    console.log(body);

    try {
      const reps = await updateMember(token, id, body);
      toast.success(reps.data);
      getData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-700 bg-gray-800">
        <thead className="bg-gray-900">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Branch
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {member.map((name, idx) => {
            return (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                  {name.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-white">
                  {name.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {name.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {/* {name.role} */}
                  <select
                    name="role"
                    onChange={(e) => hdlUpdate(e, name.id)}
                    defaultValue={name.role}
                    className="block w-full px-3 py-2 border border-gray-800 bg-gray-800 text-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                  >
                    <option>ADMIN</option>
                    <option>USER</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {/* {name.branch} */}
                  <select
                    name="branch"
                    onChange={(e) => hdlUpdate(e, name.id)}
                    defaultValue={name.branch}
                    className="block w-full px-3 py-2 border border-gray-800 bg-gray-800 text-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                  >
                    <option>CENTER</option>
                    <option>BKK</option>
                    <option>NORTH</option>
                    <option>SOUTH</option>
                    <option>NORTH_EAST</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => hdlRemove(name.id)}
                    className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableMember;
