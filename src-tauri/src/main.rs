// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::io::Read;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

// #[tauri::command]
// fn init_check() {
//     std::fs::File::read_to_string("newFile.txt");
// }

// use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

// let quit = CustomMenuItem::new("quit".to_string(), "Quit");
// let close = CustomMenuItem::new("close".to_string(), "Close");
// let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
// let menu = Menu::new().add_native_item(MenuItem::Copy).add_item(CustomMenuItem::new("hide".to_string(), "Hide")).add_submenu(submenu);

fn main() {
    tauri::Builder::default()
        // .menu(menu)
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
