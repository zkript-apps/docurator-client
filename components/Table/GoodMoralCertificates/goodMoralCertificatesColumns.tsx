
export const GOOD_MORAL_CERTIFICATES_COLUMNS = [
    {
        Header: "lrn",
        accessor: "lrn",
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
        accessor: "lastName",
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
        accessor: "firstName",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "School Name",
        accessor: "schoolName",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }

        },
    },
    {
        Header: "Signed by",
        accessor: "signedBy",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }

        },
    },
    {
        Header: "Signee Position",
        accessor: "position",
        Cell: ({ value }: any) => {
            if (value) {
                return value
            } else {
                return "..."
            }

        },
    },
    {
        Header: "School Year",
        accessor: "academicYear",
        Cell: ({ value }: any) => {
            if (value) {
                return value.from + " - " + value.to
            } else {
                return "..."
            }

        },
    },
];