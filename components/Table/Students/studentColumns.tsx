import { format } from "date-fns";

export const STUDENT_COLUMNS = [
    {
        Header: "LRN",
        accessor: "studentId.lrn",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Last Name",
        accessor: "studentId.lastName",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "First Name",
        accessor: "studentId.firstName",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Email",
        accessor: "studentId.userId.email",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Date of Birth (dd/mm/yyyy)",
        accessor: "studentId.dateOfBirth",
        Cell: ({ value }: any) => {
            if (value) {
                return format(new Date(value), "dd/MM/yyyy");
            } else {
                return "..."
            }

        },
    },
];