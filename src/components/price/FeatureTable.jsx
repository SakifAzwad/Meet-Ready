

const FeatureTable = () => {
    return (
        <div className="overflow-x-auto w-[90vw] mx-auto">
            <table className="table w-[90vw] mx-auto">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th className="w-2/5 text-3xl font-bold text-purple-700">Feature</th>
                        <th className="w-1/5 text-3xl font-bold text-purple-700">Free</th>
                        <th className="w-1/5 text-3xl font-bold text-purple-700">Premium</th>
                        <th className="w-1/5 text-3xl font-bold text-purple-700">Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">

                                <div>
                                    <div className="font-bold text-2xl">Meeting</div>
                                </div>
                            </div>
                        </td>
                        <td className="space-x-2"> 
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>

                        </td>
                        <td className="space-x-2">
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        </td>
                        <td className="space-x-2">
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">

                                <div>
                                    <div className="font-bold text-2xl">Integrations </div>
                                </div>
                            </div>
                        </td>
                        <td className="space-x-2">
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>

                        </td>
                        <td className="space-x-2">
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        </td>
                        <td className="space-x-2">
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        </td>
                    </tr>
                    {/* row 1 */}
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">

                                <div>
                                    <div className="font-bold text-2xl">Customization</div>
                                </div>
                            </div>
                        </td>
                        <td className="space-x-2">
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>

                        </td>
                        <td className="space-x-2">
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        </td>
                        <td className="space-x-2">
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        <div className="badge badge-primary badge-xs"></div>
                        </td>
                    </tr>
                    
                </tbody>
               

            </table>
        </div>
    )
}

export default FeatureTable;
