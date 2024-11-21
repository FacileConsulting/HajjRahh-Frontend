const dateStyles = {
  border: '1px solid #79747E',
  height: '47px',
  fontSize: '16px',
  lineHeight: '50px',
  borderRadius: '6px'
};

export const vData = [
  {
    title: "Hajj & Umrah Providers",
    link: "",
    subMenu: [
      {
        title: "Package Management",
        link: `/package-management-list`,
        component: "PackageManagementList",
        hide: ""
      },
      {
        id: "pilgrimage-booking-new-id",
        title: "Pilgrimage Booking New",
        link: "/pilgrimage-booking-new",
        component: "PilgrimageBookingNew",
        hide: "hider",
        content: [
          {
            class: ["mb-4"],
            fields: [
              {
                id: "pilgrimage-booking-new-main-heading",
                label: "New Piligrimage Booking",
                type: "h2",
                description: "h2 text",
                htmlType: 1,
                class: [["col-auto", "me-auto"], [""]]
              },
              {
                type: "button",
                actualType: "a",
                description: "a button",
                htmlType: 2,
                entity: [
                  {
                    id: "pilgrimage-booking-new-back-btn",
                    label: "Back",
                    keyName: "pilgrimageBookingNewBackBtn",
                    class: [["secondary", ""]]
                  },
                  {
                    id: "pilgrimage-booking-new-reset-btn",
                    label: "Reset",
                    keyName: "pilgrimageBookingNewResetBtn",
                    class: [["secondary", ""]]
                  },
                  {
                    id: "pilgrimage-booking-new-book-btn",
                    label: "Book",
                    keyName: "pilgrimageBookingNewBookBtn",
                    class: [["primary", "ms-2"]],
                  }
                ]
              },
            ]
          },
          {
            class: [""],
            fields: [
              {
                id: "pilgrimage-booking-new-select-package",
                label: "Select Package",
                type: "select",
                description: "select with label text",
                htmlFor: "pilgrimage-booking-new-select-package-for",
                keyName: "pilgrimageBookingNewPackage",
                htmlType: 3,
                selectedOption: "",
                value: "",
                options: [
                  { value: "", label: "Select" },
                  { value: "package1", label: "Package 1" },
                  { value: "package2", label: "Package 2" },
                  { value: "package3", label: "Package 3" },
                ]
              },
              {
                id: "pilgrimage-booking-new-fromDate",
                keyName: "pilgrimageBookingNewFromDate",
                label: "From Date",
                type: "datepicker",
                description: "datepicker rsuite",
                htmlType: 4,
                oneTap: true,
                htmlFor: "pilgrimage-booking-new-fromDate-for",
                size: "lg",
                value: null,
                dateStyles,
                placeholder: "Select Date",
                format: "dd-MM-yyyy",
              },
              {
                id: "pilgrimage-booking-new-toDate",
                keyName: "pilgrimageBookingNewToDate",
                label: "To Date",
                type: "datepicker",
                description: "datepicker rsuite",
                htmlType: 4,
                oneTap: true,
                htmlFor: "pilgrimage-booking-new-toDate-for",
                size: "lg",
                value: null,
                dateStyles,
                placeholder: "Select Date",
                format: "dd-MM-yyyy",
              },
            ]
          },
          {
            class: [""],
            fields: [
              {
                id: "pilgrimage-booking-new-heading-user-details",
                label: "User details",
                type: "h3",
                description: "h3 text",
                htmlType: 1,
                class: [["col-12"], ["mt-3 mb-3"]]
              },
            ]
          },
          {
            class: [""],
            fields: [
              {
                id: "pilgrimage-booking-new-heading-traveler-1",
                label: "Traveler 1",
                type: "h4",
                description: "h4 text",
                htmlType: 1,
                class: [["col-12"], ["mt-3 mb-3"]]
              },
              {
                id: "pilgrimage-booking-new-traveler-name-1",
                keyName: "pilgrimageBookingNewTravelerName_1",
                label: "Traveller name",
                type: "text",
                description: "input with label text",
                htmlType: 4,
                value: "",
                htmlFor: "pilgrimage-booking-new-traveler-name-for-1",
                placeholder: ""
              },
              {
                id: "pilgrimage-booking-new-gender-1",
                label: "Gender",
                type: "radio",
                name: "pilBookGender_1",
                description: "input with label text",
                htmlType: 6,
                value: "",
                keyName: "pilgrimageBookingNewGender_1",
                fields: [
                  {
                    id: "pilgrimage-booking-new-gender-male-1",
                    label: "Male",
                    value: "pilBookGenderMale_1",
                    htmlFor: "pilgrimage-booking-new-gender-male-for-1",
                  },
                  {
                    id: "pilgrimage-booking-new-gender-female-1",
                    label: "Female",
                    value: "pilBookGenderFemale_1",
                    htmlFor: "ppilgrimage-booking-new-gender-female-for-1",
                  }
                ]
              },
              {
                id: "pilgrimage-booking-new-mobile-number-1",
                label: "Mobile Number",
                type: "text",
                keyName: "pilgrimageBookingNewMobileNumber_1",
                actualType: "number",
                description: "input with label text",
                htmlType: 4,
                value: "",
                htmlFor: "pilgrimage-booking-new-mobile-number-for-1",
                placeholder: ""
              },
              {
                id: "pilgrimage-booking-new-email-id-1",
                label: "Email ID",
                type: "email",
                keyName: "pilgrimageBookingNewEmailId_1",
                description: "input with label text",
                htmlType: 4,
                value: "",
                htmlFor: "pilgrimage-booking-new-email-id-for-1",
                placeholder: ""
              },
              {
                id: "pilgrimage-booking-new-upload-visa-1",
                label: "Upload Visa",
                type: "file",
                keyName: "pilgrimageBookingNewUploadVisa_1",
                description: "input with label text",
                htmlType: 4,
                value: null,
                htmlFor: "pilgrimage-booking-new-upload-visa-for-1"
              },
              {
                id: "pilgrimage-booking-new-upload-passport-1",
                label: "Upload Passport",
                type: "file",
                keyName: "pilgrimageBookingNewUploadPassport_1",
                description: "input with label text",
                htmlType: 4,
                value: null,
                htmlFor: "pilgrimage-booking-new-upload-passport-for-1"
              },
              {
                id: "pilgrimage-booking-new-upload-medical-1",
                label: "Upload Medical",
                type: "file",
                keyName: "pilgrimageBookingNewUploadMedical_1",
                description: "input with label text",
                htmlType: 4,
                value: null,
                htmlFor: "pilgrimage-booking-new-upload-medical-for-1"
              },
            ]
          },
          {
            class: [""],
            fields: [
              {
                type: "button",
                actualType: "a",
                description: "a button",
                htmlType: 5,
                entity: [
                  {
                    id: "pilgrimage-booking-new-add-new-traveler-btn",
                    label: "Add New Traveler",
                    keyName: "pilgrimageBookingNewAddNewTravelerBtn",
                    icon: "bi-plus-circle-fill",
                    class: [["secondary"]]
                  },
                  {
                    id: "pilgrimage-booking-new-delete-btn",
                    label: "Delete",
                    keyName: "pilgrimageBookingNewDeleteBtn",
                    icon: "bi-trash",
                    class: [["secondary"]]
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        id: "pilgrimage-booking-list-id",
        title: "Pilgrimage Booking",
        link: "/pilgrimage-booking-list",
        component: "PilgrimageBookingList",
        hide: "",
        content: [
          {
            class: ["mb-4"],
            fields: [
              {
                id: "pilgrimage-booking-list-main-heading",
                label: "Pilgrimage Booking",
                type: "h2",
                description: "h2 text",
                htmlType: 1,
                class: [["col-auto", "me-auto"], [""]]
              },
              {
                type: "button",
                actualType: "a",
                description: "a button",
                htmlType: 2,
                class: [["col-auto"], [""]],
                entity: [
                  {
                    id: "pilgrimage-booking-list-new-booking-btn",
                    label: "New Booking",
                    keyName: "pilgrimageBookingListNewBookingBtn",
                    class: [["primary", ""]]
                  }
                ]
              },
            ]
          },
          {
            class: ["mt-4"],
            fields: [
              {
                id: "pilgrimage-booking-list-dropdown-option",
                label: "",
                type: "dropdown",
                description: "dropdown with option",
                htmlType: 8,
                value: "",
                class: [["col-9", "text-end"]]
              },
              {
                id: "pilgrimage-booking-list-search",
                label: "",
                type: "search",
                description: "search with text",
                htmlType: 9,
                value: "",
                class: [["col-3"]]
              },
              {
                id: "pilgrimage-booking-list-table",
                label: "",
                type: "table",
                description: "table with thead tbody",
                htmlType: 10,
                keyName: {
                  open: "pilgrimageBookingListOpenBtn",
                  edit: "pilgrimageBookingListEditBtn",
                  delete: "pilgrimageBookingListDeleteBtn"
                },
                value: {
                  thead: [
                    "Package",
                    "Traveler Name",
                    "Travelers Count",
                    "From Date",
                    "To Date",
                    "Email",
                    "Document Status",
                    "Status",,
                    "Actions",
                  ],
                  tbody: 'loading'
                },
                class: [["col-12"],["table-responsive", "mt-3"]]
              },
              {
                id: "pilgrimage-booking-list-paginator",
                label: "",
                type: "paginator",
                description: "paginator text",
                htmlType: 11,
                value: "",
                class: [["col-6"]]
              },
              {
                id: "pilgrimage-booking-list-pagination",
                label: "",
                type: "pagination",
                description: "pagination",
                htmlType: 12,
                value: "",
                class: [["col-6"]]
              }
            ]
          },
        ]
      },
      {
        id: "pilgrimage-booking-view-id",
        title: "Pilgrimage Booking View",
        link: `/pilgrimage-booking-view`,
        component: "PilgrimageBookingView",
        hide: "hider",
        looper: (num, name, gender, mobile, email, yesFiles, noFiles) => {
          return {
            class: [""],
            fields: [
              {
                id: `pilgrimage-booking-view-heading-traveler-${num}`,
                label: `Traveler ${num}`,
                type: "h4",
                description: "h4 text",
                htmlType: 1,
                class: [["col-12"], ["mt-3 mb-3"]]
              },
              {
                id: `pilgrimage-booking-view-traveler-name-${num}`,
                label: "Traveler Name",
                type: "h4",
                description: "h4 text",
                htmlType: 7,
                value: name || "",
                class: [["col-3"]]
              },
              {
                id: `pilgrimage-booking-view-gender-${num}`,
                label: "Gender",
                type: "h4",
                description: "h4 text",
                htmlType: 7,
                value: gender || "",
                class: [["col-3"]]
              },
              { 
                id: `pilgrimage-booking-view-mobile-number-${num}`,
                label: "Mobile Number",
                type: "h4",
                description: "h4 text",
                htmlType: 7,
                value: mobile || "",
                class: [["col-3"]]
              },
              {
                id: `pilgrimage-booking-view-email-id-${num}`,
                label: "Email Id",
                type: "h4",
                description: "h4 text",
                htmlType: 7,
                value: email || "",
                class: [["col-3"]]
              },
              {
                id: `pilgrimage-booking-view-documents-uploaded-${num}`,
                label: "Documents Uploaded",
                type: "h4",
                description: "h4 text",
                htmlType: 7,
                value: yesFiles || "",
                value2: noFiles || "",
                class: [["col-6"], ["text-danger"]]
              },
            ]
          }
        },
        content: [
          {
            class: ["mb-4"],
            fields: [
              {
                id: "pilgrimage-booking-view-main-heading",
                label: "View Pilgrimage Booking",
                type: "h2",
                description: "h2 text",
                htmlType: 1,
                class: [["col-auto", "me-auto"], [""]]
              },
              {
                type: "button",
                actualType: "a",
                description: "a button",
                htmlType: 2,
                entity: [
                  {
                    id: "pilgrimage-booking-view-back-btn",
                    label: "Back",
                    keyName: "pilgrimageBookingViewBackBtn",
                    class: [["secondary", ""]]
                  },
                  {
                    id: "pilgrimage-booking-view-cancel-booking-btn",
                    label: "Cancel Booking",
                    keyName: "pilgrimageBookingViewCancelBookingBtn",
                    class: [["secondary", "ms-2"]],
                  }
                ]
              },
            ]
          },
          {
            class: [""],
            fields: [
              {
                id: "pilgrimage-booking-view-package-name",
                label: "Package Name",
                type: "h4",
                description: "h4 text",
                htmlType: 7,
                value: "wer",
                class: [["col-3"]]
              },
              {
                id: "pilgrimage-booking-view-from-date",
                label: "From Date",
                type: "h4",
                description: "h4 text",
                htmlType: 7,
                value: "eew",
                class: [["col-3"]]
              },
              {
                id: "pilgrimage-booking-view-to-date",
                label: "To Date",
                type: "h4",
                description: "h4 text",
                htmlType: 7,
                value: "ers",
                class: [["col-3"]]
              },
            ]
          },
          {
            class: [""],
            fields: [
              {
                id: "pilgrimage-booking-view-heading-user-details",
                label: "User details",
                type: "h3",
                description: "h3 text",
                htmlType: 1,
                class: [["col-12"], ["mt-3 mb-3"]]
              },
            ]
          },
        ]
      },
    ]
  },
];