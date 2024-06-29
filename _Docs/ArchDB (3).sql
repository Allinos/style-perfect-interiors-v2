-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 23, 2024 at 07:03 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

-- ALTER TABLE `deals` ADD `contact2` VARCHAR(15) NULL DEFAULT NULL AFTER `contact`;
-- ALTER TABLE `deals` ADD `oth_details` VARCHAR(155) NULL DEFAULT NULL AFTER `city`;
-- ALTER TABLE `vendor_supplies` DROP `quantity`, DROP `rate`, DROP `uom`;
-- ALTER TABLE `vendor_supplies` ADD `gst_status` VARCHAR(10) NOT NULL DEFAULT 'yes' AFTER `date`;
-- ALTER TABLE vendor_supplies  DROP project_ref; // delete if exist !



SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Database: `ArchDB`
-- --------------------------------------------------------



--
-- Table structure for table `adminauth`
--

CREATE TABLE `adminauth` (
  `adm_id` int(11) NOT NULL,
  `name` varchar(80) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(10) DEFAULT 'admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adminauth`
--

INSERT INTO `adminauth` (`adm_id`, `name`, `email`, `password`, `role`) VALUES
(1, 'msi', 'msi@gmail.com', '77ee3625f508f3051360327fb67668b2ba769f13f56599bb45a4a923bb850c49', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(155) NOT NULL,
  `contact` varchar(15) DEFAULT NULL,
  `contact2` varchar(15) DEFAULT NULL,
  `email` varchar(155) DEFAULT NULL,
  `location` varchar(155) DEFAULT NULL,
  `oth_details` varchar(155) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `name`, `contact`, `contact2`, `email`, `location`, `oth_details`) VALUES
(2, 'msi', '9401069337', '101010', 'msi@gmail.com', 'adfsg', '1010101010');

-- --------------------------------------------------------

--
-- Table structure for table `contractual_emp`
--

CREATE TABLE `contractual_emp` (
  `cempid` int(11) NOT NULL,
  `ndeal_id` bigint(20) NOT NULL,
  `category_id` int(11) NOT NULL,
  `emp_name` varchar(100) DEFAULT NULL,
  `designation` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `deals`
--

CREATE TABLE `deals` (
  `id` bigint(20) NOT NULL,
  `deal_name` varchar(200) DEFAULT NULL,
  `reference_no` varchar(20) DEFAULT NULL,
  `contact` bigint(15) DEFAULT NULL,
  `agreement_amount` int(11) DEFAULT NULL,
  `work_name` varchar(300) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  `np_deadline` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `empAttendance`
--

CREATE TABLE `empAttendance` (
  `January` char(1) DEFAULT NULL,
  `February` char(1) DEFAULT NULL,
  `March` char(1) DEFAULT NULL,
  `April` char(1) DEFAULT NULL,
  `May` char(1) DEFAULT NULL,
  `June` char(1) DEFAULT NULL,
  `July` char(1) DEFAULT NULL,
  `August` char(1) DEFAULT NULL,
  `September` char(1) DEFAULT NULL,
  `October` char(1) DEFAULT NULL,
  `November` char(1) DEFAULT NULL,
  `December` char(1) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `empID` int(11) NOT NULL,
  `date` varchar(10) NOT NULL,
  `year` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `em_id` int(11) NOT NULL,
  `name` varchar(80) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `number` varchar(15) DEFAULT NULL,
  `lastLoginAt` datetime DEFAULT NULL,
  `lastLogoutAt` datetime DEFAULT NULL,
  `status` varchar(30) NOT NULL DEFAULT 'active',
  `job_role` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `emp_task_notify`
--

CREATE TABLE `emp_task_notify` (
  `notid` bigint(20) NOT NULL,
  `emid` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `dateofnotify` varchar(50) DEFAULT '0',
  `status` varchar(20) DEFAULT 'unread'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `remark` varchar(355) DEFAULT NULL,
  `amount` int(50) NOT NULL,
  `date` varchar(20) NOT NULL,
  `md_type` varchar(10) NOT NULL,
  `categories` varchar(155) DEFAULT NULL,
  `project_id` varchar(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `title`, `remark`, `amount`, `date`, `md_type`, `categories`, `project_id`) VALUES
(1, 'new expence', 'fadfha', 15000, '22/06/2024', 'cash', 'project', '1'),
(2, 'new expence', 'sdagadgs', 1500, '29/06/2024', 'online', 'sdagadgs', '');

-- --------------------------------------------------------

--
-- Table structure for table `material_left`
--

CREATE TABLE `material_left` (
  `mlid` bigint(20) NOT NULL,
  `ndeal_id` bigint(20) NOT NULL,
  `material_name` varchar(100) DEFAULT NULL,
  `quantity` varchar(100) DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `material_names`
--

CREATE TABLE `material_names` (
  `mnid` int(11) NOT NULL,
  `material_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `material_used`
--

CREATE TABLE `material_used` (
  `muid` bigint(20) NOT NULL,
  `ndeal_id` bigint(20) NOT NULL,
  `material_name` varchar(100) DEFAULT NULL,
  `quantity` varchar(100) DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `normal_projects_finance`
--

CREATE TABLE `normal_projects_finance` (
  `fid` bigint(20) NOT NULL,
  `ndeal_id` bigint(20) NOT NULL,
  `totalamount` int(11) DEFAULT NULL,
  `task` int(11) DEFAULT NULL,
  `amount_got` int(11) DEFAULT 0,
  `dateofpay` varchar(50) DEFAULT NULL,
  `modeofpay` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `normal_project_cat`
--

CREATE TABLE `normal_project_cat` (
  `npcid` int(11) NOT NULL,
  `ndeal_id` bigint(20) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `cat_status` varchar(50) DEFAULT 'pending',
  `project_status` varchar(60) DEFAULT 'pending',
  `dateofdeadline` varchar(80) DEFAULT '0',
  `dateofpostponed` varchar(80) DEFAULT '0',
  `dateofcomplete` varchar(50) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `normal_project_employee`
--

CREATE TABLE `normal_project_employee` (
  `npeid` int(11) NOT NULL,
  `ndeal_id` bigint(20) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `emid` int(11) DEFAULT NULL,
  `dateofassign` varchar(50) DEFAULT '0',
  `dateofremove` varchar(50) DEFAULT '0',
  `npcid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `normal_project_subtask`
--

CREATE TABLE `normal_project_subtask` (
  `npstid` int(11) NOT NULL,
  `ndeal_id` bigint(20) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `stask_id` int(11) DEFAULT NULL,
  `stask_status` varchar(50) DEFAULT 'not started',
  `dateofcomplete` varchar(50) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subtask`
--

CREATE TABLE `subtask` (
  `sub_task_id` int(11) NOT NULL,
  `task_id` int(11) DEFAULT NULL,
  `sub_task_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `task_id` int(11) NOT NULL,
  `task_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` int(11) NOT NULL,
  `name` varchar(155) NOT NULL,
  `contact` varchar(15) DEFAULT NULL,
  `contact2` varchar(15) DEFAULT NULL,
  `email` varchar(155) DEFAULT NULL,
  `location` varchar(155) DEFAULT NULL,
  `oth_details` varchar(155) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vendors`
--

INSERT INTO `vendors` (`id`, `name`, `contact`, `contact2`, `email`, `location`, `oth_details`) VALUES
(2, 'msi', '9401069337', NULL, 'msi@gmail.com', 'adfsg', '1010101010');

-- --------------------------------------------------------

--
-- Table structure for table `vendor_payments`
--

CREATE TABLE `vendor_payments` (
  `id` int(11) NOT NULL,
  `vendor_supply_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL DEFAULT 'n/a',
  `amount` int(50) NOT NULL,
  `dateofpay` varchar(50) NOT NULL,
  `modeofpay` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `vendor_supplies`
--

CREATE TABLE `vendor_supplies` (
  `id` int(11) NOT NULL,
  `vendor_id` int(11) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `details` varchar(255) DEFAULT NULL,
  `quantity` int(10) NOT NULL,
  `rate` int(10) NOT NULL,
  `sgst` int(5) DEFAULT 0,
  `cgst` int(5) DEFAULT 0,
  `uom` varchar(20) DEFAULT NULL,
  `total_amount` int(50) NOT NULL,
  `modeofpay` varchar(20) NOT NULL,
  `date` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vendor_supplies`
--

INSERT INTO `vendor_supplies` (`id`, `vendor_id`, `item_name`, `details`, `quantity`, `rate`, `sgst`, `cgst`, `uom`, `total_amount`, `modeofpay`, `date`) VALUES
(2, 2, 'Bricks', 'for UNI', 1000, 8, 12, 12, 'pcs.', 8000, 'online', '12/06/12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminauth`
--
ALTER TABLE `adminauth`
  ADD PRIMARY KEY (`adm_id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contractual_emp`
--
ALTER TABLE `contractual_emp`
  ADD PRIMARY KEY (`cempid`),
  ADD KEY `ndeal_id` (`ndeal_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `deals`
--
ALTER TABLE `deals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `empAttendance`
--
ALTER TABLE `empAttendance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`em_id`);

--
-- Indexes for table `emp_task_notify`
--
ALTER TABLE `emp_task_notify`
  ADD PRIMARY KEY (`notid`),
  ADD UNIQUE KEY `title` (`title`),
  ADD KEY `emid` (`emid`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `material_left`
--
ALTER TABLE `material_left`
  ADD PRIMARY KEY (`mlid`),
  ADD KEY `ndeal_id` (`ndeal_id`);

--
-- Indexes for table `material_names`
--
ALTER TABLE `material_names`
  ADD PRIMARY KEY (`mnid`);

--
-- Indexes for table `material_used`
--
ALTER TABLE `material_used`
  ADD PRIMARY KEY (`muid`),
  ADD KEY `ndeal_id` (`ndeal_id`);

--
-- Indexes for table `normal_projects_finance`
--
ALTER TABLE `normal_projects_finance`
  ADD PRIMARY KEY (`fid`),
  ADD KEY `ndeal_id` (`ndeal_id`),
  ADD KEY `task` (`task`);

--
-- Indexes for table `normal_project_cat`
--
ALTER TABLE `normal_project_cat`
  ADD PRIMARY KEY (`npcid`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `ndeal_id` (`ndeal_id`);

--
-- Indexes for table `normal_project_employee`
--
ALTER TABLE `normal_project_employee`
  ADD PRIMARY KEY (`npeid`),
  ADD UNIQUE KEY `node` (`ndeal_id`,`category_id`,`emid`),
  ADD KEY `ndeal_id` (`ndeal_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `emid` (`emid`);

--
-- Indexes for table `normal_project_subtask`
--
ALTER TABLE `normal_project_subtask`
  ADD PRIMARY KEY (`npstid`),
  ADD KEY `ndeal_id` (`ndeal_id`),
  ADD KEY `stask_id` (`stask_id`);

--
-- Indexes for table `subtask`
--
ALTER TABLE `subtask`
  ADD PRIMARY KEY (`sub_task_id`),
  ADD KEY `task_id` (`task_id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`task_id`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vendor_payments`
--
ALTER TABLE `vendor_payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendor_payments_ibfk_1` (`vendor_supply_id`);

--
-- Indexes for table `vendor_supplies`
--
ALTER TABLE `vendor_supplies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendor_supplies_ibfk_1` (`vendor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminauth`
--
ALTER TABLE `adminauth`
  MODIFY `adm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contractual_emp`
--
ALTER TABLE `contractual_emp`
  MODIFY `cempid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `deals`
--
ALTER TABLE `deals`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `empAttendance`
--
ALTER TABLE `empAttendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `em_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `emp_task_notify`
--
ALTER TABLE `emp_task_notify`
  MODIFY `notid` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `material_left`
--
ALTER TABLE `material_left`
  MODIFY `mlid` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `material_names`
--
ALTER TABLE `material_names`
  MODIFY `mnid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `material_used`
--
ALTER TABLE `material_used`
  MODIFY `muid` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `normal_projects_finance`
--
ALTER TABLE `normal_projects_finance`
  MODIFY `fid` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `normal_project_cat`
--
ALTER TABLE `normal_project_cat`
  MODIFY `npcid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `normal_project_employee`
--
ALTER TABLE `normal_project_employee`
  MODIFY `npeid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `normal_project_subtask`
--
ALTER TABLE `normal_project_subtask`
  MODIFY `npstid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subtask`
--
ALTER TABLE `subtask`
  MODIFY `sub_task_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vendor_payments`
--
ALTER TABLE `vendor_payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vendor_supplies`
--
ALTER TABLE `vendor_supplies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contractual_emp`
--
ALTER TABLE `contractual_emp`
  ADD CONSTRAINT `contractual_emp_ibfk_1` FOREIGN KEY (`ndeal_id`) REFERENCES `deals` (`id`),
  ADD CONSTRAINT `contractual_emp_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `task` (`task_id`);

--
-- Constraints for table `material_left`
--
ALTER TABLE `material_left`
  ADD CONSTRAINT `material_left_ibfk_1` FOREIGN KEY (`ndeal_id`) REFERENCES `deals` (`id`);

--
-- Constraints for table `material_used`
--
ALTER TABLE `material_used`
  ADD CONSTRAINT `material_used_ibfk_1` FOREIGN KEY (`ndeal_id`) REFERENCES `deals` (`id`);

--
-- Constraints for table `normal_projects_finance`
--
ALTER TABLE `normal_projects_finance`
  ADD CONSTRAINT `normal_projects_finance_ibfk_1` FOREIGN KEY (`ndeal_id`) REFERENCES `deals` (`id`),
  ADD CONSTRAINT `normal_projects_finance_ibfk_2` FOREIGN KEY (`task`) REFERENCES `task` (`task_id`);

--
-- Constraints for table `normal_project_cat`
--
ALTER TABLE `normal_project_cat`
  ADD CONSTRAINT `normal_project_cat_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `task` (`task_id`),
  ADD CONSTRAINT `normal_project_cat_ibfk_2` FOREIGN KEY (`ndeal_id`) REFERENCES `deals` (`id`);

--
-- Constraints for table `normal_project_employee`
--
ALTER TABLE `normal_project_employee`
  ADD CONSTRAINT `normal_project_employee_ibfk_1` FOREIGN KEY (`ndeal_id`) REFERENCES `deals` (`id`),
  ADD CONSTRAINT `normal_project_employee_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `task` (`task_id`),
  ADD CONSTRAINT `normal_project_employee_ibfk_3` FOREIGN KEY (`emid`) REFERENCES `employee` (`em_id`);

--
-- Constraints for table `normal_project_subtask`
--
ALTER TABLE `normal_project_subtask`
  ADD CONSTRAINT `normal_project_subtask_ibfk_1` FOREIGN KEY (`ndeal_id`) REFERENCES `deals` (`id`),
  ADD CONSTRAINT `normal_project_subtask_ibfk_2` FOREIGN KEY (`stask_id`) REFERENCES `subtask` (`sub_task_id`);

--
-- Constraints for table `subtask`
--
ALTER TABLE `subtask`
  ADD CONSTRAINT `subtask_ibfk_1` FOREIGN KEY (`task_id`) REFERENCES `task` (`task_id`);

--
-- Constraints for table `vendor_payments`
--
ALTER TABLE `vendor_payments`
  ADD CONSTRAINT `vendor_payments_ibfk_1` FOREIGN KEY (`vendor_supply_id`) REFERENCES `vendor_supplies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `vendor_supplies`
--
ALTER TABLE `vendor_supplies`
  ADD CONSTRAINT `vendor_supplies_ibfk_1` FOREIGN KEY (`vendor_id`) REFERENCES `vendors` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
