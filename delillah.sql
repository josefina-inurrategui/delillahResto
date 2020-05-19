-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2020 a las 05:10:01
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `delillah`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `usuario` varchar(10) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` int(11) NOT NULL,
  `direccion` varchar(300) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `usuario`, `pass`, `nombre`, `apellido`, `email`, `telefono`, `direccion`, `is_admin`) VALUES
(1, 'josefina.i', '123456aa', 'Josefina', 'Iñurrategui', 'testt@tumail.com', 45896485, 'se cambia 1234', 1),
(2, 'la.peku', 'qwerasdf', 'Josefa', 'Garcia', 'probando5@tumail.com', 45896485, 'test 14568', 0),
(3, 'Ultimo', '123qweasd', 'Jose', 'Quiroga', 'josefinaqwe@pprobando.com', 115454666, 'calle falsa 5432', 0),
(4, 'Ultimmo', '', 'Jose', 'Quiroga', 'josefinaqwe@pprobando.com', 115454666, 'calle falsa 5432', 0),
(5, 'test', 'test123', 'Ana', 'Quiroga', 'anaq@probando.com', 115499666, 'calle verdadera 5432', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `forma_pago`
--

CREATE TABLE `forma_pago` (
  `id` int(2) NOT NULL,
  `descripcion` varchar(15) NOT NULL,
  `icon_pago` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `forma_pago`
--

INSERT INTO `forma_pago` (`id`, `descripcion`, `icon_pago`) VALUES
(1, 'Efectivo', NULL),
(2, 'Tarjeta de debito', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE `imagenes` (
  `id` int(3) NOT NULL,
  `imagen` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `estado` enum('Nuevo','Confirmado','Preparando','Enviado','Entregado','Cancelado') NOT NULL DEFAULT 'Nuevo',
  `fecha_hora` datetime NOT NULL DEFAULT current_timestamp(),
  `id_pago` int(2) NOT NULL,
  `id_cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `estado`, `fecha_hora`, `id_pago`, `id_cliente`) VALUES
(1, 'Nuevo', '2020-05-18 01:40:01', 1, 1),
(2, 'Nuevo', '2020-05-18 01:40:33', 1, 3),
(3, 'Nuevo', '2020-05-18 01:40:48', 2, 2),
(4, 'Nuevo', '2020-05-18 01:40:50', 2, 2),
(5, 'Nuevo', '2020-05-18 19:24:01', 2, 2),
(6, 'Nuevo', '2020-05-18 19:24:51', 3, 2),
(7, 'Nuevo', '2020-05-18 19:25:22', 1, 2),
(8, '', '2020-05-18 19:26:02', 1, 2),
(9, 'Nuevo', '2020-05-18 19:26:17', 3, 2),
(10, 'Nuevo', '2020-05-18 19:26:54', 3, 2),
(11, 'Nuevo', '2020-05-18 19:32:19', 3, 2),
(12, 'Nuevo', '2020-05-18 19:33:41', 3, 2),
(13, 'Nuevo', '2020-05-18 19:34:21', 3, 2),
(14, 'Nuevo', '2020-05-18 19:34:36', 3, 2),
(15, 'Nuevo', '2020-05-18 19:34:46', 3, 2),
(16, 'Nuevo', '2020-05-18 19:35:04', 3, 2),
(17, 'Nuevo', '2020-05-18 19:35:23', 3, 2),
(18, 'Nuevo', '2020-05-18 19:36:23', 3, 2),
(19, 'Nuevo', '2020-05-18 19:38:17', 3, 2),
(20, 'Nuevo', '2020-05-18 19:39:46', 3, 2),
(21, 'Nuevo', '2020-05-18 19:40:09', 3, 2),
(22, 'Nuevo', '2020-05-18 19:41:40', 3, 2),
(23, 'Nuevo', '2020-05-18 19:41:54', 3, 2),
(24, 'Nuevo', '2020-05-18 19:42:22', 3, 2),
(25, 'Nuevo', '2020-05-18 19:42:35', 3, 2),
(26, 'Nuevo', '2020-05-18 19:42:51', 3, 2),
(27, 'Nuevo', '2020-05-18 19:43:58', 3, 2),
(28, 'Nuevo', '2020-05-18 19:45:48', 3, 2),
(29, 'Nuevo', '2020-05-18 19:46:33', 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `producto` varchar(20) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(5,2) DEFAULT NULL,
  `disponibilidad` tinyint(1) DEFAULT 1,
  `id_imagen` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `producto`, `descripcion`, `precio`, `disponibilidad`, `id_imagen`) VALUES
(1, 'tortilla de papas', 'Tortilla de papas con cebolla', '50.00', 1, 1),
(2, 'Hamburguesa con ques', 'Hamburguesa de carne con queso', '30.00', 1, 2),
(3, 'Milanesa con papas f', 'Milanesa de carne con papas fritas para uno', '150.00', 1, 2),
(5, 'Alfajor de maicena', 'con dulce de leche y coco', '10.00', 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_pedido`
--

CREATE TABLE `producto_pedido` (
  `id` int(11) NOT NULL,
  `cantidad` int(2) NOT NULL DEFAULT 1,
  `id_producto` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto_pedido`
--

INSERT INTO `producto_pedido` (`id`, `cantidad`, `id_producto`, `id_pedido`) VALUES
(1, 5, 1, 5),
(3, 5, 1, 8),
(4, 1, 2, 8),
(5, 1, 3, 7),
(8, 1, 3, 7);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `forma_pago`
--
ALTER TABLE `forma_pago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto_pedido`
--
ALTER TABLE `producto_pedido`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `forma_pago`
--
ALTER TABLE `forma_pago`
  MODIFY `id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `imagenes`
--
ALTER TABLE `imagenes`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `producto_pedido`
--
ALTER TABLE `producto_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
