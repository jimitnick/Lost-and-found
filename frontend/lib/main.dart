import 'package:flutter/material.dart';
import 'pages/welcome_screen.dart';

void main() {
  runApp(const AmritaRetrieverApp());
}

class AmritaRetrieverApp extends StatelessWidget {
  const AmritaRetrieverApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Amrita Retriever',
      theme: ThemeData(
        primarySwatch: Colors.pink,
        fontFamily: 'Roboto',
      ),
      home: const WelcomeScreen(),
    );
  }
}
