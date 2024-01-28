
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { classNames } from 'primereact/utils';
// // // // // // // import { FilterMatchMode, FilterOperator } from 'primereact/api';
// // // // // // // import { DataTable } from 'primereact/datatable';
// // // // // // // import { Column } from 'primereact/column';
// // // // // // // import { InputText } from 'primereact/inputtext';
// // // // // // // import { Dropdown } from 'primereact/dropdown';
// // // // // // // import { MultiSelect } from 'primereact/multiselect';
// // // // // // // import { Tag } from 'primereact/tag';
// // // // // // // import { TriStateCheckbox } from 'primereact/tristatecheckbox';
// // // // // // // import Appointments from './store-mobx/Appointments';

// // // // // // // export default function BasicFilterDemo() {
// // // // // // //     const [customers, setCustomers] = useState(null);
// // // // // // //     const [filters, setFilters] = useState({
// // // // // // //         global: { value: null, matchMode: FilterMatchMode.CONTAINS },
// // // // // // //         name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
// // // // // // //         'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
// // // // // // //         representative: { value: null, matchMode: FilterMatchMode.IN },
// // // // // // //         status: { value: null, matchMode: FilterMatchMode.EQUALS },
// // // // // // //         verified: { value: null, matchMode: FilterMatchMode.EQUALS }
// // // // // // //     });
// // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // //     const [globalFilterValue, setGlobalFilterValue] = useState('');
// // // // // // //     const [representatives] = useState([
// // // // // // //         { name: 'Amy Elsner', image: 'amyelsner.png' },
// // // // // // //         { name: 'Anna Fali', image: 'annafali.png' },
// // // // // // //         { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
// // // // // // //         { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
// // // // // // //         { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
// // // // // // //         { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
// // // // // // //         { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
// // // // // // //         { name: 'Onyama Limba', image: 'onyamalimba.png' },
// // // // // // //         { name: 'Stephen Shaw', image: 'stephenshaw.png' },
// // // // // // //         { name: 'XuXue Feng', image: 'xuxuefeng.png' }
// // // // // // //     ]);
// // // // // // //     const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

// // // // // // //     const getSeverity = (status) => {
// // // // // // //         switch (status) {
// // // // // // //             case 'unqualified':
// // // // // // //                 return 'danger';

// // // // // // //             case 'qualified':
// // // // // // //                 return 'success';

// // // // // // //             case 'new':
// // // // // // //                 return 'info';

// // // // // // //             case 'negotiation':
// // // // // // //                 return 'warning';

// // // // // // //             case 'renewal':
// // // // // // //                 return null;
// // // // // // //         }
// // // // // // //     };

// // // // // // //     useEffect(() => {
// // // // // // //         Appointments.getAppoinments().then((data) => {

// // // // // // //             setCustomers(getCustomers(data));
// // // // // // //             setLoading(false);
// // // // // // //         });
// // // // // // //     }, []); // eslint-disable-line react-hooks/exhaustive-deps

// // // // // // //     const getCustomers = (data) => {
// // // // // // //         return [...(data || [])].map((d) => {
// // // // // // //             d.date = new Date(d.date);

// // // // // // //             return d;
// // // // // // //         });
// // // // // // //     };

// // // // // // //     const onGlobalFilterChange = (e) => {
// // // // // // //         const value = e.target.value;
// // // // // // //         let _filters = { ...filters };

// // // // // // //         _filters['global'].value = value;

// // // // // // //         setFilters(_filters);
// // // // // // //         setGlobalFilterValue(value);
// // // // // // //     };

// // // // // // //     const renderHeader = () => {
// // // // // // //         return (
// // // // // // //             <div className="flex justify-content-end">
// // // // // // //                 <span className="p-input-icon-left">
// // // // // // //                     <i className="pi pi-search" />
// // // // // // //                     <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
// // // // // // //                 </span>
// // // // // // //             </div>
// // // // // // //         );
// // // // // // //     };

// // // // // // //     const countryBodyTemplate = (rowData) => {
// // // // // // //         return (
// // // // // // //             <div className="flex align-items-center gap-2">
// // // // // // //                 <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} style={{ width: '24px' }} />
// // // // // // //                 <span>{rowData.country.name}</span>
// // // // // // //             </div>
// // // // // // //         );
// // // // // // //     };

// // // // // // //     const representativeBodyTemplate = (rowData) => {
// // // // // // //         const representative = rowData.representative;

// // // // // // //         return (
// // // // // // //             <div className="flex align-items-center gap-2">
// // // // // // //                 <img alt={representative.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${representative.image}`} width="32" />
// // // // // // //                 <span>{representative.name}</span>
// // // // // // //             </div>
// // // // // // //         );
// // // // // // //     };

// // // // // // //     const representativesItemTemplate = (option) => {
// // // // // // //         return (
// // // // // // //             <div className="flex align-items-center gap-2">
// // // // // // //                 <img alt={option.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${option.image}`} width="32" />
// // // // // // //                 <span>{option.name}</span>
// // // // // // //             </div>
// // // // // // //         );
// // // // // // //     };

// // // // // // //     const statusBodyTemplate = (rowData) => {
// // // // // // //         return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
// // // // // // //     };

// // // // // // //     const statusItemTemplate = (option) => {
// // // // // // //         return <Tag value={option} severity={getSeverity(option)} />;
// // // // // // //     };

// // // // // // //     const verifiedBodyTemplate = (rowData) => {
// // // // // // //         return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
// // // // // // //     };

// // // // // // //     const representativeRowFilterTemplate = (options) => {
// // // // // // //         return (
// // // // // // //             <MultiSelect
// // // // // // //                 value={options.value}
// // // // // // //                 options={representatives}
// // // // // // //                 itemTemplate={representativesItemTemplate}
// // // // // // //                 onChange={(e) => options.filterApplyCallback(e.value)}
// // // // // // //                 optionLabel="name"
// // // // // // //                 placeholder="Any"
// // // // // // //                 className="p-column-filter"
// // // // // // //                 maxSelectedLabels={1}
// // // // // // //                 style={{ minWidth: '14rem' }}
// // // // // // //             />
// // // // // // //         );
// // // // // // //     };

// // // // // // //     const statusRowFilterTemplate = (options) => {
// // // // // // //         return (
// // // // // // //             <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
// // // // // // //         );
// // // // // // //     };

// // // // // // //     const verifiedRowFilterTemplate = (options) => {
// // // // // // //         return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />;
// // // // // // //     };

// // // // // // //     const header = renderHeader();

// // // // // // //     return (
// // // // // // //         <div className="card">
// // // // // // //             <DataTable value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
// // // // // // //                     globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
// // // // // // //                 <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
// // // // // // //                 <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
// // // // // // //                 <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
// // // // // // //                     body={representativeBodyTemplate} filter filterElement={representativeRowFilterTemplate} />
// // // // // // //                 <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
// // // // // // //                 <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
// // // // // // //             </DataTable>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // }
        
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { DataTable } from 'primereact/datatable';
// // // // // // // import { Column } from 'primereact/column';
// // // // // // // import Appointments from './store-mobx/Appointments';
// // // // // // // export default function MultipleColumnsDemo() {
// // // // // // //     const [products, setProducts] = useState([]);

// // // // // // //     useEffect(() => {
// // // // // // //        Appointments.getAppoinments().then(data => setProducts(data));
// // // // // // //     }, []);

// // // // // // //     return (
// // // // // // //         <div className="card">
// // // // // // //             <DataTable value={products} sortMode="multiple" tableStyle={{ minWidth: '50rem' }}>
// // // // // // //                 <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
// // // // // // //                 <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
// // // // // // //                 <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
// // // // // // //                 <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
// // // // // // //             </DataTable>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // }
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { DataTable } from 'primereact/datatable';
// // // // // // // import { Column } from 'primereact/column';
// // // // // // // import Appointments from './store-mobx/Appointments';

// // // // // // // export default function MultipleColumnsDemo() {
// // // // // // //     const [products, setProducts] = useState([]);

// // // // // // //     useEffect(() => {
// // // // // // //         fetchData();
// // // // // // //     }, []);

// // // // // // //     async function fetchData() {
// // // // // // //         try {
// // // // // // //             const data = await Appointments.getAppoinments();
// // // // // // //             setProducts(data);
// // // // // // //         } catch (error) {
// // // // // // //             console.error(error);
// // // // // // //         }
// // // // // // //     }

// // // // // // //     return (
// // // // // // //         <div className="card">
// // // // // // //             <DataTable value={products} sortMode="multiple" tableStyle={{ minWidth: '50rem' }}>
// // // // // // //                 <Column  field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
// // // // // // //                 <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
// // // // // // //                 <Column field="clientEmail" header="Client Email" sortable style={{ width: '25%' }}></Column>
// // // // // // //                 <Column field="serviceName" header="Service Name" sortable style={{ width: '25%' }}></Column>
// // // // // // //             </DataTable>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // }
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { DataTable } from 'primereact/datatable';
// // // // // // // import { Column } from 'primereact/column';
// // // // // // // import Appointments from './store-mobx/Appointments';

// // // // // // // export default function MultipleColumnsDemo() {
// // // // // // //     const [products, setProducts] = useState([]);

// // // // // // //     useEffect(() => {
// // // // // // //         fetchData();
// // // // // // //     }, []);

// // // // // // //     async function fetchData() {
// // // // // // //         try {
// // // // // // //             const data = await Appointments.getAppointments();
// // // // // // //             setProducts(data);
// // // // // // //         } catch (error) {
// // // // // // //             console.error(error);
// // // // // // //         }
// // // // // // //     }

// // // // // // //     return (
// // // // // // //         <div className="card">
// // // // // // //             <DataTable value={products} sortMode="multiple" tableStyle={{ minWidth: '50rem' }}>
// // // // // // //                 <Column field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
// // // // // // //                 <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
// // // // // // //                 <Column field="clientEmail" header="Client Email" sortable style={{ width: '25%' }}></Column>
// // // // // // //                 <Column field="serviceName" header="Service Name" sortable style={{ width: '25%' }}></Column>
// // // // // // //                 <Column header="Client Name" sortable style={{ width: '25%' }} body={(rowData) => <span>{rowData.clientName}</span>}></Column>
// // // // // // //                 <Column header="Client Phone" sortable style={{ width: '25%' }} body={(rowData) => <span>{rowData.clientPhone}</span>}></Column>
// // // // // // //                 <Column header="Client Email" sortable style={{ width: '25%' }} body={(rowData) => <span>{rowData.clientEmail}</span>}></Column>
// // // // // // //                 <Column header="Service Name" sortable style={{ width: '25%' }} body={(rowData) => <span>{rowData.serviceName}</span>}></Column>
// // // // // // //             </DataTable>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // }

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { DataTable } from 'primereact/datatable';
// // // // // import { Column } from 'primereact/column';
// // // // // import { Calendar } from 'primereact/calendar';
// // // // // import Appointments
// // // // //  from './store-mobx/Appointments';
// // // // // export default function MultipleColumnsDemo() {
// // // // //   const [appointments, setAppointments] = useState();
// // // // //   const [filteredAppointments, setFilteredAppointments] = useState([]);
// // // // //   const [selectedDate, setSelectedDate] = useState(null);


// // // // //   const [app, setapp] = useState();

// // // // //   useEffect(() => {
// // // // //     setAppointments(Appointments.appointments)
    
// // // // //     setSelectedDate(Appointments.appointments);
// // // // //   }, []);


// // // // //   const filterByDate = (event) => {
// // // // //     const selectedDate = event.value;

// // // // //     setSelectedDate(selectedDate);

// // // // //     if (selectedDate) {
// // // // //       const filteredData = appointments.filter((appointment) => {
// // // // //         const appointmentDate = moment(appointment.dateTime).format('DD/MM/YYYY');
// // // // //         const selectedDateFormatted = moment(selectedDate).format('DD/MM/YYYY');
// // // // //         return appointmentDate === selectedDateFormatted;
// // // // //       });
// // // // //       setFilteredAppointments(filteredData);
// // // // //     } else {
// // // // //         setFilteredAppointments(appointments);
// // // // //     }
// // // // //   };

// // // // // // //   const dateTemplate = (rowData) => {
// // // // // // //     const appointmentDate = moment(rowData.dateTime).format('DD/MM/YYYY');
// // // // // // //     const today = moment().format('DD/MM/YYYY');
// // // // // // //     const nextWeek = moment().add(7, 'days').format('DD/MM/YYYY');

// // // // // // //     let iconColor;
// // // // // // //     if (appointmentDate === today) {
// // // // // // //       iconColor = 'red';
// // // // // // //     } else if (moment(appointmentDate, 'DD/MM/YYYY').isBetween(today, nextWeek, undefined, '[]')) {
// // // // // // //       iconColor = 'orange';
// // // // // // //     } else {
// // // // // // //       iconColor = 'green';
// // // // // // //     }

// // // // // // //     return (
// // // // // // //       <span className={`icon-${iconColor}`}>
// // // // // // //         <i className="pi pi-calendar"></i>
// // // // // // //       </span>
// // // // // // //     );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="card">
// // // // // // //       <Calendar value={selectedDate} onChange={filterByDate} showIcon />
// // // // // // //       <DataTable value={filteredAppointments}>
// // // // // // //         <Column field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
// // // // // // //         <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
// // // // // // //         <Column field="clientEmail" header="clientEmail" sortable style={{ width: '25%' }}></Column>
// // // // // // //         <Column field="dateTime" header="dateTime" sortable style={{ width: '25%' }} body={dateTemplate}></Column>
// // // // // // //         <Column field="serviceName" header="serviceName" sortable style={{ width: '25%' }}></Column>
// // // // // // //       </DataTable>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { DataTable } from 'primereact/datatable';
// // // // // // import { Column } from 'primereact/column';
// // // // // // import { Calendar } from 'primereact/calendar';
// // // // // // import moment from 'moment';
// // // // // // import { Appointments } from './store-mobx/Appointments';

// // // // // // import './MultipleColumnsDemo.css';

// // // // // // export default function MultipleColumnsDemo() {
// // // // // //   const [appointments, setAppointments] = useState([]);
// // // // // //   const [filteredAppointments, setFilteredAppointments] = useState([]);
// // // // // //   const [selectedDate, setSelectedDate] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     setAppointments(Appointments.appointments);
// // // // // //     setSelectedDate(Appointments.appointments);
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     filterByDate(selectedDate);
// // // // // //   }, [selectedDate]);

// // // // // //   const filterByDate = (selectedDate) => {
// // // // // //     if (selectedDate) {
// // // // // //       const formattedSelectedDate = moment(selectedDate).format('DD/MM/YYYY');
// // // // // //       const filteredData = appointments.filter((appointment) => {
// // // // // //         const appointmentDate = moment(appointment.dateTime).format('DD/MM/YYYY');
// // // // // //         return appointmentDate === formattedSelectedDate;
// // // // // //       });
// // // // // //       setFilteredAppointments(filteredData);
// // // // // //     } else {
// // // // // //       setFilteredAppointments(appointments);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSort = (event) => {
// // // // // //     const sortKey = event.target.value;
// // // // // //     let sortedData;
// // // // // //     switch (sortKey) {
// // // // // //       case 'red':
// // // // // //         sortedData = [...filteredAppointments].sort((a, b) => {
// // // // // //           const aDate = moment(a.dateTime).format('DD/MM/YYYY');
// // // // // //           const bDate = moment(b.dateTime).format('DD/MM/YYYY');
// // // // // //           if (aDate === moment().format('DD/MM/YYYY')) {
// // // // // //             return -1;
// // // // // //           } else if (moment(aDate, 'DD/MM/YYYY').isBetween(moment().format('DD/MM/YYYY'), moment().add(7, 'days').format('DD/MM/YYYY'), undefined, '[]')) {
// // // // // //             return 1;
// // // // // //           }
// // // // // //           return 0;
// // // // // //         });
// // // // // //         break;
// // // // // //       case 'orange':
// // // // // //         sortedData = [...filteredAppointments].sort((a, b) => {
// // // // // //           const aDate = moment(a.dateTime).format('DD/MM/YYYY');
// // // // // //           const bDate = moment(b.dateTime).format('DD/MM/YYYY');
// // // // // //           if (moment(aDate, 'DD/MM/YYYY').isBetween(moment().format('DD/MM
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { DataTable } from 'primereact/datatable';
// // // // // import { Column } from 'primereact/column';
// // // // // import { Calendar } from 'primereact/calendar';
// // // // // import Appointments from './store-mobx/Appointments';
// // // // // import moment from 'moment';

// // // // // export default function MultipleColumnsDemo() {
// // // // //   const [appointments, setAppointments] = useState([]);
// // // // //   const [filteredAppointments, setFilteredAppointments] = useState([]);
// // // // //   const [selectedDate, setSelectedDate] = useState(null);
// // // // //   const [sortOption, setSortOption] = useState('');

// // // // //   useEffect(() => {
// // // // //     setAppointments(Appointments.appointments);
// // // // //     setSelectedDate(Appointments.appointments);
// // // // //   }, []);

// // // // //   const filterByDate = (event) => {
// // // // //     const selectedDate = event.value;

// // // // //     setSelectedDate(selectedDate);

// // // // //     if (selectedDate) {
// // // // //       const filteredData = appointments.filter((appointment) => {
// // // // //         const appointmentDate = moment(appointment.dateTime).format('DD/MM/YYYY');
// // // // //         const selectedDateFormatted = moment(selectedDate).format('DD/MM/YYYY');
// // // // //         return appointmentDate === selectedDateFormatted;
// // // // //       });
// // // // //       setFilteredAppointments(filteredData);
// // // // //     } else {
// // // // //       setFilteredAppointments(appointments);
// // // // //     }
// // // // //   };

// // // // //   const dateTemplate = (rowData) => {
// // // // //     const appointmentDate = moment(rowData.dateTime).format('DD/MM/YYYY');
// // // // //     const today = moment().format('DD/MM/YYYY');
// // // // //     const nextWeek = moment().add(7, 'days').format('DD/MM/YYYY');

// // // // //     let iconColor;
// // // // //     if (appointmentDate === today) {
// // // // //       iconColor = 'red';
// // // // //     } else if (moment(appointmentDate, 'DD/MM/YYYY').isBetween(today, nextWeek, undefined, '[]')) {
// // // // //       iconColor = 'orange';
// // // // //     } else {
// // // // //       iconColor = 'green';
// // // // //     }

// // // // //     return (
// // // // //       <span className={`icon-${iconColor}`}>
// // // // //         <i className="pi pi-calendar"></i>
// // // // //       </span>
// // // // //     );
// // // // //   };

// // // // //   const customSort = (event) => {
// // // // //     const value = event.value;

// // // // //     if (value === 'red') {
// // // // //       setFilteredAppointments([...filteredAppointments].sort((a, b) => {
// // // // //         const dateA = moment(a.dateTime).format('DD/MM/YYYY');
// // // // //         const dateB = moment(b.dateTime).format('DD/MM/YYYY');
// // // // //         }));
// // // // //       } else if (value === 'orange') {
// // // // //         setFilteredAppointments([...filteredAppointments].sort((a, b) => {
// // // // //           const dateA = moment(a.dateTime).format('DD/MM/YYYY');
// // // // //           const dateB = moment(b.dateTime).format('DD/MM/YYYY');
// // // // //           if (moment(dateA, 'DD/MM/YYYY').isBetween(moment().format('DD/MM/YYYY'), moment().add(7, 'days').format('DD/MM/YYYY'), undefined, '[]') &&
// // // // //             !moment(dateB, 'DD/MM/YYYY').isBetween(moment().format('DD/MM/YYYY'), moment().add(7, 'days').format('DD/MM/YYYY'), undefined, '[]')) {
// // // // //             return -1;
// // // // //           } else if (!moment(dateA, 'DD/MM/YYYY').isBetween(moment().format('DD/MM/YYYY'), moment().add(7, 'days').format('DD/MM/YYYY'), undefined, '[]') &&
// // // // //             moment(dateB, 'DD/MM/YYYY').isBetween(moment().format('DD/MM/YYYY'), moment().add(7, 'days').format('DD/MM/YYYY'), undefined, '[]')) {
// // // // //             return 1;
// // // // //           } else {
// // // // //             return 0;
// // // // //           }
// // // // //         }));
// // // // //       } else {
// // // // //         setFilteredAppointments([...filteredAppointments].sort((a, b) => {
// // // // //           const dateA = moment(a.dateTime).format('DD/MM/YYYY');
// // // // //           const dateB = moment(b.dateTime).format('DD/MM/YYYY');
// // // // //           if (dateA < dateB) {
// // // // //             return -1;
// // // // //           } else if (dateA > dateB) {
// // // // //             return 1;
// // // // //           } else {
// // // // //             return 0;
// // // // //           }
// // // // //         }));
// // // // //       }
// // // // //       setSortOption(value);
// // // // //     };
  
// // // // //     return (
// // // // //       <div className="card">
// // // // //         <Calendar value={selectedDate} onChange={filterByDate} showIcon />
// // // // //         <DataTable value={filteredAppointments}>
// // // // //           <Column field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
// // // // //           <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
// // // // //           <Column field="clientEmail" header="clientEmail" sortable style={{ width : '25%' }}></Column>
// // // // //         <Column field="dateTime" header="Date/Time" sortable style={{ width: '25%' }} body={dateTemplate}></Column>
// // // // //         <Column
// // // // //           field="status"
// // // // //           header="Status"
// // // // //           sortable
// // // // //           style={{ width: '25%' }}
// // // // //           body={(rowData) => <span className={`status-${rowData.status.toLowerCase()}`}>{rowData.status}</span>}
// // // // //           sortFunction={customSort}
// // // // //         ></Column>
// // // // //       </DataTable>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { DataTable } from 'primereact/datatable';
// // // // // import { Column } from 'primereact/column';
// // // // // import { Calendar } from 'primereact/calendar';
// // // // // import moment from 'moment';
// // // // // import './MultipleColumnsDemo.css';

// // // // // import Appointments from './store-mobx/Appointments';

// // // // // export default function MultipleColumnsDemo() {
// // // // //   const [appointments, setAppointments] = useState();
// // // // //   const [filteredAppointments, setFilteredAppointments] = useState([]);
// // // // //   const [selectedDate, setSelectedDate] = useState(null);

// // // // //   useEffect(() => {
// // // // //     setAppointments(Appointments.appointments);
// // // // //     setSelectedDate(Appointments.appointments);
// // // // //   }, []);

// // // // //   const filterByDate = (event) => {
// // // // //     const selectedDate = event.value;

// // // // //     setSelectedDate(selectedDate);

// // // // //     if (selectedDate) {
// // // // //       const filteredData = appointments.filter((appointment) => {
// // // // //         const appointmentDate = moment(appointment.dateTime).format('DD/MM/YYYY');
// // // // //         const selectedDateFormatted = moment(selectedDate).format('DD/MM/YYYY');
// // // // //         return appointmentDate === selectedDateFormatted;
// // // // //       });
// // // // //       setFilteredAppointments(filteredData);
// // // // //     } else {
// // // // //       setFilteredAppointments(appointments);
// // // // //     }
// // // // //   };

// // // // //   const dateTemplate = (rowData) => {
// // // // //     const appointmentDate = moment(rowData.dateTime).format('DD/MM/YYYY');
// // // // //     const today = moment().format('DD/MM/YYYY');
// // // // //     const nextWeek = moment().add(7, 'days').format('DD/MM/YYYY');

// // // // //     let iconColor;
// // // // //     if (appointmentDate === today) {
// // // // //       iconColor = 'red';
// // // // //     } else if (moment(appointmentDate, 'DD/MM/YYYY').isBetween(today, nextWeek, undefined, '[]')) {
// // // // //       iconColor = 'orange';
// // // // //     } else {
// // // // //       iconColor = 'green';
// // // // //     }

// // // // //     return (
// // // // //       <span className={`icon-${iconColor}`}>
// // // // //         <i className="pi pi-calendar"></i>
// // // // //       </span>
// // // // //     );
// // // // //   };

// // // // //   const colorSort = (event) => {
// // // // //     const { field, order } = event.sortMeta;

// // // // //     if (field === 'dateTime') {
// // // // //       const sortedData = [...filteredAppointments].sort((a, b) => {
// // // // //         const aDate = moment(a.dateTime, 'DD/MM/YYYY');
// // // // //         const bDate = moment(b.dateTime, 'DD/MM/YYYY');
// // // // //         if (aDate.isSame(bDate)) return 0;
// // // // //         return (aDate.isBefore(bDate) ? -1 : 1) * (order === 1 ? 1 : -1);
// // // // //       });
// // // // //       setFilteredAppointments(sortedData);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="card">
// // // // //       <Calendar value={selectedDate} onChange={filterByDate} showIcon />
// // // // //       <DataTable value={filteredAppointments} sortMode="multiple" sortField="dateTime" sortOrder={1} onSort={colorSort}>
// // // // //         <Column field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
// // // // //         <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
// // // // //         <Column field="clientEmail" header="clientEmail" sortable style={{ width: '25%' }}></Column>
// // // // //         <Column field="dateTime" header="dateTime" sortable style={{ width: '25%' }} body={dateTemplate}></Column>
// // // // //         <Column field="serviceName" header="serviceName" sortable style={{ width: '25%' }}></Column>
// // // // //       </DataTable>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // import React from 'react';
// // // // // import { DataTable } from 'primereact/datatable';
// // // // // import { Column } from 'primereact/column';
// // // // // import Appointments from './store-mobx/Appointments';
// // // // // import { useState,useEffect } from 'react';
// // // // // export default function MultipleColumnsDemo() {

// // // // //     const [app, setapp] = useState();

// // // // //     useEffect(() => {
// // // // //         setapp(Appointments.appointments);
// // // // //     }, []);

// // // // //    return (
// // // // //       <div className="card">
// // // // //          <DataTable value={app}>
// // // // //             <Column field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
// // // // //             <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
// // // // //             <Column field="clientEmail" header="clientEmail" sortable style={{ width: '25%' }}></Column>
// // // // //             <Column field="dateTime" header="dateTime" sortable style={{ width: '25%' }}></Column>
// // // // //             <Column field="serviceName" header="serviceName" sortable style={{ width: '25%' }}></Column>
// // // // //          </DataTable>
// // // // //       </div>
// // // // //    );
// // // // // }
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { DataTable } from 'primereact/datatable';
// // // // // import { Column } from 'primereact/column';
// // // // // import Appointments from './store-mobx/Appointments';
// // // // // import moment from 'moment';

// // // // // export default function MultipleColumnsDemo() {
// // // // //   const [app, setApp] = useState([]);

// // // // //   useEffect(() => {
// // // // //     setApp(Appointments.appointments);
// // // // //   }, []);

// // // // //   const getRowColor = (date) => {
// // // // //     const today = moment().startOf('day');
// // // // //     const startOfWeek = moment().startOf('week');
// // // // //     const endOfWeek = moment().endOf('week');
// // // // //     const appointmentDate = moment(date).startOf('day');

// // // // //     if (appointmentDate.isSame(today, 'day')) {
// // // // //       return 'red'; // Today's appointment
// // // // //     } else if (appointmentDate.isBetween(startOfWeek, endOfWeek)) {
// // // // //       return 'orange'; // This week's appointment
// // // // //     } else {
// // // // //       return 'green'; // Other appointments
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="card">
// // // // //       <DataTable value={app}>
// // // // //         <Column field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
// // // // //         <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
// // // // //         <Column field="clientEmail" header="Client Email" sortable style={{ width: '25%' }}></Column>
// // // // //         <Column
// // // // //           field="dateTime"
// // // // //           header="Date/Time"
// // // // //           sortable
// // // // //           style={{ width: '25%' }}
// // // // //           body={(rowData) => (
// // // // //             <div
// // // // //               style={{
// // // // //                 backgroundColor: getRowColor(rowData.dateTime),
// // // // //               }}
// // // // //             >
// // // // //               {rowData.dateTime}
// // // // //             </div>
// // // // //           )}
// // // // //         ></Column>
// // // // //         <Column field="serviceName" header="Service Name" sortable style={{ width: '25%' }}></Column>
// // // // //       </DataTable>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { DataTable } from 'primereact/datatable';
// // // // // import { Column } from 'primereact/column';
// // // // // import Appointments from '../store-mobx/Appointments';
// // // // // import moment from 'moment';

// // // // // export default function GetAppointmentData() {
// // // // //   const [app, setApp] = useState([]);

// // // // //   useEffect(() => {
   
// // // // //     console.log(Appointments.appointments[2].clientName);
// // // // //     setApp(Appointments.appointments);
// // // // //   }, []);

// // // // //   const getRowColor = (date) => {
// // // // //     const today = moment().startOf('day');
// // // // //     const startOfWeek = moment().startOf('week');
// // // // //     const endOfWeek = moment().endOf('week');
// // // // //     const appointmentDate = moment(date);
// // // // //     if (appointmentDate.isSame(today, 'day')) {
// // // // //       return 'red'; // Today's appointment
// // // // //     } else if (appointmentDate.isBetween(startOfWeek, endOfWeek)) {
// // // // //       return 'orange'; // This week's appointment
// // // // //     } else {
// // // // //       return 'green'; // Other appointments
// // // // //     }
// // // // //   };
// // // // //   const formatDateTime = (dateTime) => {
// // // // //     return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
// // // // //   };
// // // // //   return (
// // // // //     <div className="card">
// // // // //       <DataTable value={app}>
// // // // //         <Column field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
// // // // //         <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
// // // // //         <Column field="clientEmail" header="Client Email" sortable style={{ width: '25%' }}></Column> 
// // // // //          <Column field='serviceName' header="Service Name"  sortable style={{ width: '25%' }}></Column>
// // // // //         <Column
// // // // //           field="dateTime"
// // // // //           header="Date/Time"
// // // // //           sortable
// // // // //           style={{ width: '25%' }}
// // // // //           body={(rowData) => (
// // // // //             <div
// // // // //               style={{
// // // // //                 backgroundColor: getRowColor(rowData.dateTime),
// // // // //               }}
// // // // //             >
// // // // //               {formatDateTime(rowData.dateTime)}
// // // // //             </div>
// // // // //           )}
// // // // //         ></Column>
// // // // //       </DataTable>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { DataTable } from 'primereact/datatable';
// // // // // import { Column } from 'primereact/column';
// // // // // import Appointments from '../store-mobx/Appointments';
// // // // // import moment from 'moment';

// // // // // export default function GetAppointmentData() {
// // // // //   const [app, setApp] = useState([]);

// // // // //   // useEffect(() => {
// // // // //   //   async function fetchData() {
// // // // //   //     try {
// // // // //   //       const response = await fetch('http://localhost:8787/appointments', {
// // // // //   //         method: 'GET',
// // // // //   //       });
// // // // //   //       if (response.ok) {
// // // // //   //         const data = await response.json();
// // // // //   //         setApp(data);
// // // // //   //       } else {
// // // // //   //         throw new Error('Unable to fetch Appointments');
// // // // //   //       }
// // // // //   //     } catch (error) {
// // // // //   //       console.error(error);
// // // // //   //     }
// // // // //   //   }

// // // // //   //   fetchData();
// // // // //   // }, []);
// // // // //   useEffect(() => {
   
// // // // //     console.log(Appointments.appointments[2].clientName);
// // // // //     setApp(Appointments.appointments);
// // // // //   }, []);
// // // // //   const getRowColor = (date) => {
// // // // //     const today = moment().startOf('day');
// // // // //     const startOfWeek = moment().startOf('week');
// // // // //     const endOfWeek = moment().endOf('week');
// // // // //     const appointmentDate = moment(date);
// // // // //     if (appointmentDate.isSame(today, 'day')) {
// // // // //       return 'red'; // Today's appointment
// // // // //     } else if (appointmentDate.isBetween(startOfWeek, endOfWeek)) {
// // // // //       return 'orange'; // This week's appointment
// // // // //     } else {
// // // // //       return 'green'; // Other appointments
// // // // //     }
// // // // //   };

// // // // //   const formatDateTime = (dateTime) => {
// // // // //     return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
// // // // //   };

// // // // //   return (
// // // // //     <div className="card">
// // // // //       <DataTable value={app}>
// // // // //         <Column field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
// // // // //         <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
// // // // //         <Column field="clientEmail" header="Client Email" sortable style={{ width: '25%' }}></Column> 
// // // // //          <Column field="serviceName.sn" header="Service Name" sortable style={{ width: '25%' }}></Column>
// // // // //         <Column
// // // // //                field="dateTime"
// // // // //           header="Date/Time"
// // // // //           sortable
// // // // //           style={{ width: '25%' }}
// // // // //           body={(rowData) => (
// // // // //             <div
// // // // //               style={{
// // // // //                 backgroundColor: getRowColor(rowData.dateTime),
// // // // //               }}
// // // // //             >
// // // // //               {formatDateTime(rowData.dateTime)}
// // // // //             </div>
// // // // //           )}
// // // // //         ></Column>
// // // // //       </DataTable>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import React, { useState, useEffect } from 'react';
// // // // import { DataTable } from 'primereact/datatable';
// // // // import { Column } from 'primereact/column';
// // // // import moment from 'moment';
// // // // import Appointments from '../store-mobx/Appointments';
// // // // export default function GetAppointmentData() {
// // // //   const [app, setApp] = useState([]);
// // // //   useEffect(() => {
   
// // // //     setApp(Appointments.appointments);
// // // //   }, []);
// // // //   // useEffect(() => {
// // // //   //   async function fetchData() {
// // // //   //     try {
// // // //   //       const response = await fetch('http://localhost:8787/appointments', {
// // // //   //         method: 'GET',
// // // //   //       });
// // // //   //       if (response.ok) {
// // // //   //         const data = await response.json();
// // // //   //         setApp(data);
// // // //   //       } else {
// // // //   //         throw new Error('Unable to fetch Appointments');
// // // //   //       }
// // // //   //     } catch (error) {
// // // //   //       console.error(error);
// // // //   //     }
// // // //   //   }

// // // //   //   fetchData();
// // // //   // }, []);

// // // //   const getRowColor = (date) => {
// // // //     const today = moment().startOf('day');
// // // //     const startOfWeek = moment().startOf('week');
// // // //     const endOfWeek = moment().endOf('week');
// // // //     const appointmentDate = moment(date);
// // // //     if (appointmentDate.isSame(today, 'day')) {
// // // //       return 'red'; // Today's appointment
// // // //     } else if (appointmentDate.isBetween(startOfWeek, endOfWeek)) {
// // // //       return 'orange'; // This week's appointment
// // // //     } else {
// // // //       return 'green'; // Other appointments
// // // //     }
// // // //   };

// // // //   const formatDateTime = (dateTime) => {
// // // //     return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
// // // //   };

// // // //   return (
// // // //     <div className="card">
// // // //       <DataTable value={app}>
// // // //         <Column field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
// // // //         <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
// // // //         <Column field="clientEmail" header="Client Email" sortable style={{ width: '25%' }}></Column>
// // // //         <Column field="serviceName.sn"  header="Service Name" sortable style={{ width: '25%' }}></Column>
// // // //         <Column
// // // //           field="dateTime"
// // // //           header="Date/Time"
// // // //           sortable
// // // //           style={{ width: '25%' }}
// // // //           body={(rowData) => (
// // // //             <div
// // // //               style={{
// // // //                 backgroundColor: getRowColor(rowData.dateTime),
// // // //               }}
// // // //             >
// // // //               {formatDateTime(rowData.dateTime)}
// // // //             </div>
// // // //           )}
// // // //         ></Column>
// // // //         <Column
// // // //           field="clientEmail"
// // // //           header="clientEmail"
// // // //           sortable
// // // //           style={{ width: '25%' }}
   
// // // //         ></Column>
// // // //       </DataTable>
// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useState, useEffect } from 'react';
// // // import { DataTable } from 'primereact/datatable';
// // // import { Column } from 'primereact/column';
// // // import moment from 'moment';
// // // import Appointments from '../store-mobx/Appointments';
// // // import { observer } from 'mobx-react';
// // //  const GetAppointmentData  =(observer(() => {
// // //   const [app, setApp] = useState([]);

// // //   useEffect(() => {
// // //     setApp(Appointments.appoinments);
// // //   }, []);

// // //   const getRowColor = (date) => {
// // //     const today = moment().startOf('day');
// // //     const startOfWeek = moment().startOf('week');
// // //     const endOfWeek = moment().endOf('week');
// // //     const appointmentDate = moment(date);
// // //     if (appointmentDate.isSame(today, 'day')) {
// // //       return 'red'; // Today's appointment
// // //     } else if (appointmentDate.isBetween(startOfWeek, endOfWeek)) {
// // //       return 'orange'; // This week's appointment
// // //     } else {
// // //       return 'green'; // Other appointments
// // //     }
// // //   };

// // //   const formatDateTime = (dateTime) => {
// // //     return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
// // //   };
// // //   return (
// // //     <div className="card">
      
// // //       <DataTable value={app}>
        
// // //         <Column field="clientName" header="Client Name" sortable style={{ width: '25%' }}></Column>
// // //         <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
// // //         { <Column field="clientEmail" header="Client Email" sortable style={{ width: '25%' }}
// // //         body={(rowData) => (
// // //           <div

// // //           >
// // //             {rowData.clientEmail}
// // //           </div>
// // //         )}
          
// // //         ></Column> }
// // //         { <Column field="serviceName" header="Service Name" sortable style={{
// // //           width: '25%' }}
// // //           body={(rowData) => (
// // //             <div
// // //               style={{
// // //                 backgroundColor: getRowColor(rowData.dateTime),
// // //               }}
// // //             >
// // //               {formatDateTime(rowData.dateTime)}
// // //             </div>
// // //           )}
// // //         ></Column> }
// // //       </DataTable>
// // //     </div>
// // //   );
// // // }));
// // // export default GetAppointmentData
// // import React, { useState, useEffect } from 'react';
// // import { DataTable } from 'primereact/datatable';
// // import { Column } from 'primereact/column';
// // import moment from 'moment';

// // export default function GetAppointmentData() {
// //   const [app, setApp] = useState([]);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const response = await fetch('http://localhost:8787/appointments', {
// //           method: 'GET',
// //         });
// //         if (response.ok) {
// //           const data = await response.json();
// //           setApp(data);
// //         } else {
// //           throw new Error('Unable to fetch Appointments');
// //         }
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     }

// //     fetchData();
// //   }, []);

// //   const getRowColor = (date) => {
// //     const today = moment().startOf('day');
// //     const startOfWeek = moment().startOf('week');
// //     const endOfWeek = moment().endOf('week');
// //     const appointmentDate = moment(date);
// //     if (appointmentDate.isSame(today, 'day')) {
// //       return 'red'; // Today's appointment
// //     } else if (appointmentDate.isBetween(startOfWeek, endOfWeek)) {
// //       return 'orange'; // This week's appointment
// //     } else {
// //       return 'green'; // Other appointments
// //     }
// //   };

// //   const formatDateTime = (dateTime) => {
// //     return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
// //   };

// //   return (
// //     <div className="card">
// //       <DataTable value={app}>
// //         <Column field="clientName" header="Client Name" style={{ width: '25%' }}></Column>
// //         <Column field="clientPhone" header="Client Phone" style={{ width: '25%' }}></Column>
// //         <Column field="clientEmail" header="Client Email" style={{ width: '25%' }}></Column>
// //         <Column field="serviceName" header="Service Name" style={{ width: '25%' }}></Column>
// //         <Column
// //           field="dateTime"
// //           header="Date and Time"
// //           style={{ width: '25%' }}
// //           body={(rowData) => (
// //             <div
// //               style={{                backgroundColor: getRowColor(rowData.dateTime),
// //               }}
// //             >
// //               {formatDateTime(rowData.dateTime)}
// //             </div>
// //           )}
// //         ></Column>
// //       </DataTable>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import moment from 'moment';

// export default function GetAppointmentData() {
//   const [app, setApp] = useState([]);



//   const getRowColor = (date) => {
//     const today = moment().startOf('day');
//     const startOfWeek = moment().startOf('week');
//     const endOfWeek = moment().endOf('week');
//     const appointmentDate = moment(date);
//     if (appointmentDate.isSame(today, 'day')) {
//       return 'red'; // Today's appointment
//     } else if (appointmentDate.isBetween(startOfWeek, endOfWeek)) {
//       return 'orange'; // This week's appointment
//     } else {
//       return 'green'; // Other appointments
//     }
//   };

//   const formatDateTime = (dateTime) => {
//     return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
//   };
//   useEffect(() => {
//     setApp(Appointments.appoinments);
//   }, []);

//   return (
//     <div className="card">
//       <DataTable value={app}>
//         <Column field="clientName" header="Client Name" id="clientName" sortable style={{ width: '25%' }}></Column>
//         <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
//         <Column field="clientEmail" header="Client Email" sortable style={{ width: '25%' }}></Column>
//         <Column field="dateTime" header="Appointment DateTime" sortable style={{width: '25%' }}
//           body={(rowData) => (
//             <div
//               style={{
//                 backgroundColor: getRowColor(rowData.dateTime),
//               }}
//             >
//               {formatDateTime(rowData.dateTime)}
//             </div>
//           )}
//         ></Column>
//       </DataTable>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import moment from 'moment';
import Appointments from '../store-mobx/AppointmentsS';

export default function GetAppointmentData() {
  const [app, setApp] = useState([]);

  useEffect(() => {
setApp(()=>Appointments.appointments);
  }, []);

  const getRowColor = (date) => {
    console.log(app);

    const today = moment().startOf('day');
    const startOfWeek = moment().startOf('week');
    const endOfWeek = moment().endOf('week');
    const appointmentDate = moment(date);
    if (appointmentDate.isSame(today, 'day')) {
      return 'red'; // Today's appointment
    } else if (appointmentDate.isBetween(startOfWeek, endOfWeek)) {
      return 'orange'; // This week's appointment
    } else {
      return 'green'; // Other appointments
    }
  };

  const formatDateTime = (dateTime) => {
    return moment(dateTime).format('YYYY-MM-DD HH:mm:ss');
  };

  return (
    <div className="card">
      
      <DataTable value={app}>
        <Column field={"clientName"} header="Client Name"  sortable style={{ width: '25%' }}></Column>
        <Column field="clientPhone" header="Client Phone" sortable style={{ width: '25%' }}></Column>
        <Column field="clientEmail" header="Client Email" sortable style={{ width: '25%' }}></Column>
        <Column field="dateTime" header="dateTime" sortable style={{width: '25%' }}
          body={(rowData) => (
            <div
              style={{
                backgroundColor: getRowColor(rowData.dateTime),
              }}
            >
              {formatDateTime(rowData.dateTime)}
            </div>
          )}
        ></Column>
                <Column field ="serviceName"header="service Name"  ></Column>

      </DataTable>
    </div>
  );
}
