
export const FORM137_COLUMNS = [
    {
        Header: "LRN",
        accessor: "studentId.lrn",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Education Level",
        accessor: "educationLevel",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Status of Applicant",
        accessor: "studentId.statusOfApplicant",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Email",
        accessor: "studentId.email",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "Mobile Number",
        accessor: "studentId.phoneNumber",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }
        },
    },
    {
        Header: "School Name",
        accessor: "studentId.schoolName",
        Cell: ({ value }) => {
            if (value) {
                return value
            } else {
                return "..."
            }

        },
    },

];