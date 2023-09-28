-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2023 at 09:04 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `c_id` int(11) UNSIGNED NOT NULL,
  `c_name` text NOT NULL,
  `c_description` text NOT NULL,
  `c_price` decimal(65,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`c_id`, `c_name`, `c_description`, `c_price`) VALUES
(1, 'test', 'test', 4000.07),
(3, 'test', 'test', 5000.07),
(4, 'test', 'test', 5000.07),
(5, 'test', 'test', 5000.07),
(6, 'test', 'test', 5000.07);

-- --------------------------------------------------------

--
-- Table structure for table `enroll`
--

CREATE TABLE `enroll` (
  `cer_id` int(10) UNSIGNED NOT NULL,
  `m_id` int(10) UNSIGNED NOT NULL,
  `c_id` int(10) UNSIGNED NOT NULL,
  `cer_start` datetime NOT NULL,
  `cer_expire` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enroll`
--

INSERT INTO `enroll` (`cer_id`, `m_id`, `c_id`, `cer_start`, `cer_expire`) VALUES
(23, 5, 6, '2023-09-14 00:00:00', '2023-09-25 00:00:00'),
(24, 3, 1, '2023-08-02 00:58:00', '2023-09-02 00:58:00');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `m_id` int(11) UNSIGNED NOT NULL,
  `m_email` text NOT NULL,
  `m_password` text NOT NULL,
  `m_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`m_id`, `m_email`, `m_password`, `m_name`) VALUES
(3, '@gmail', '12345', 'pae'),
(4, 'test@gmail', '12345', 'tset'),
(5, 'pae@gmail.com', '123456', 'paeth'),
(6, 'test@gmail', '12345', 'test'),
(7, 'test@gmail', '12345', 'test'),
(9, 'pae@gmail.com', '123456', 'paeth'),
(10, 'pae@gmail.com', '123456', 'paeth'),
(11, 'pae@gmail.com', '123456', 'paeth'),
(12, 'pae@gmail.com', '123456', 'paeth'),
(13, 'pae@gmail.com', '123456', 'paeth'),
(14, 'pae@gmail.com', '123456', 'paeth'),
(15, 'pae@gmail.com', '123456', 'paeth'),
(16, 'pae@gmail.com', '123456', 'paeth'),
(17, 'pae@gmail.com', '123456', 'paeth'),
(18, 'pae@gmail.com', '123456', 'paeth'),
(19, 'pae@gmail.com', '123456', 'paeth'),
(21, 'pae@gmail.com', '123456', 'paeth'),
(23, 'pae@gmail.com', '123456', 'sornpawat hiranyanon');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`c_id`),
  ADD UNIQUE KEY `c_id` (`c_id`);

--
-- Indexes for table `enroll`
--
ALTER TABLE `enroll`
  ADD PRIMARY KEY (`cer_id`),
  ADD KEY `m_id` (`m_id`),
  ADD KEY `c_id` (`c_id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`m_id`),
  ADD UNIQUE KEY `m_id` (`m_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `c_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `enroll`
--
ALTER TABLE `enroll`
  MODIFY `cer_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `m_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `enroll`
--
ALTER TABLE `enroll`
  ADD CONSTRAINT `enroll_ibfk_1` FOREIGN KEY (`m_id`) REFERENCES `member` (`m_id`),
  ADD CONSTRAINT `enroll_ibfk_2` FOREIGN KEY (`c_id`) REFERENCES `course` (`c_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
