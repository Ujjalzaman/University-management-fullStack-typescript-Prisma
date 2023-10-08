import type { MenuProps } from "antd";
import {
    ProfileOutlined,
    TableOutlined,
    AppstoreOutlined,
    ScheduleOutlined,
    ThunderboltOutlined,
    CreditCardOutlined,
    FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
    const defaultSidebarProps: MenuProps['items'] = [{
        label: 'Profile',
        key: 'profile',
        icon: <ProfileOutlined />,
        children: [
            {
                label: <Link href={`/${role}`}>Account Profile</Link>,
                key: `/${role}`
            },
            {
                label: <Link href={`/${role}/change-password`}>Change Password</Link>,
                key: `/${role}/change-password`
            }
        ]
    }]

    const commonAdminSidebar: MenuProps['items'] = [
        {
            label: <Link href={`/${role}/manage-students`}>Manage Students</Link>,
            key: `/${role}/manage-students`,
            icon: <ProfileOutlined />,
        },
        {
            label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
            key: `/${role}/manage-faculty`,
            icon: <ProfileOutlined />,
        },
    ]

    const AdminSidebarItems: MenuProps['items'] = [
        ...defaultSidebarProps,
        ...commonAdminSidebar,
        {
            label: "Manage Academic",
            key: 'manage-academic',
            icon: <ProfileOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
                    key: `/${role}/acadmic/faculty`
                },
                {
                    label: <Link href={`/${role}/academic/departments`}>Departments</Link>,
                    key: `/${role}/acadmic/departments`
                },
                {
                    label: <Link href={`/${role}/academic/semesters`}>Semesters</Link>,
                    key: `/${role}/acadmic/semesters`
                }
            ]
        },
        {
            label: "Management",
            key: 'management',
            icon: <ProfileOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/academic/faculty`}>Department</Link>,
                    key: `/${role}/department`
                },
                {
                    label: <Link href={`/${role}/academic/departments`}>Building</Link>,
                    key: `/${role}/building`
                },
                {
                    label: <Link href={`/${role}/academic/semesters`}>Rooms</Link>,
                    key: `/${role}/rooms`
                },
                {
                    label: <Link href={`/${role}/academic/semesters`}>Course</Link>,
                    key: `/${role}/course`
                },
                {
                    label: <Link href={`/${role}/semester-registration`}>Semester registration</Link>,
                    key: `/${role}/semester-registration`,
                },
                {
                    label: <Link href={`/${role}/offered-course`}>Offered courses</Link>,
                    key: `/${role}/offered-course`,
                },
                {
                    label: <Link href={`/${role}/offered-course-section`}>Course sections</Link>,
                    key: `/${role}/offered-course-section`,
                },
                {
                    label: <Link href={`/${role}/offered-course-schedule`}>Course schedules</Link>,
                    key: `/${role}/offered-course-schedule`,
                },
            ]
        }
    ]

    const superAdminSidebarItems: MenuProps['items'] = [
        ...defaultSidebarProps,
        ...commonAdminSidebar,
        {
            label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
            icon: <TableOutlined />,
            key: `/${role}/admin`,
        },
        {
            label: <Link href={`/${role}/user`}>Manage User</Link>,
            icon: <TableOutlined />,
            key: `/${role}/user`,
        },
        {
            label: "Management",
            key: "management",
            icon: <AppstoreOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/department`}>Department</Link>,
                    key: `/${role}/department`,
                },
            ],
        },
    ];

    const facultySidebarItems: MenuProps['items'] = [
        ...defaultSidebarProps,
        {
            label: <Link href={`/${role}/courses`}>Courses</Link>,
            icon: <TableOutlined />,
            key: `/${role}/courses`,
        },
    ]

    const studentSidebarItems: MenuProps["items"] = [
        ...defaultSidebarProps,
        {
            label: <Link href={`/${role}/courses`}>Courses</Link>,
            icon: <TableOutlined />,
            key: `/${role}/courses`,
        },
        {
            label: <Link href={`/${role}/courses/schedule`}>Course schedules</Link>,
            icon: <ScheduleOutlined />,
            key: `/${role}/courses/schedule`,
        },
        {
            label: <Link href={`/${role}/registration`}>Registration</Link>,
            icon: <ThunderboltOutlined />,
            key: `/${role}/registration`,
        },
        {
            label: <Link href={`/${role}/payment`}>Payment</Link>,
            icon: <CreditCardOutlined />,
            key: `/${role}/payment`,
        },
        {
            label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
            icon: <FileTextOutlined />,
            key: `/${role}/academic-report`,
        },
    ];
    if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems
    if (role === USER_ROLE.ADMIN) return AdminSidebarItems;
    if (role === USER_ROLE.FACULTY) return facultySidebarItems;
    if (role === USER_ROLE.STUDENTS) return studentSidebarItems;
    else {
        return defaultSidebarProps
    }
}