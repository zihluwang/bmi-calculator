use clap::Parser;

/// BMI Calculator - Calculate Body Mass Index from weight and height
#[derive(Parser)]
#[command(name = "bmi")]
#[command(about = "A CLI tool to calculate Body Mass Index (BMI)")]
#[command(version = "1.0")]
struct Args {
    /// Weight in kilograms
    #[arg(short, long)]
    weight: f64,

    /// Height in centimetres
    #[arg(long)]
    height: f64,
}

/// Calculate BMI from weight (kg) and height (cm)
fn calculate_bmi(weight_kg: f64, height_cm: f64) -> f64 {
    let height_m = height_cm / 100.0;
    weight_kg / (height_m * height_m)
}

/// Categorise BMI result according to WHO standards
fn categorise_bmi(bmi: f64) -> &'static str {
    match bmi {
        bmi if bmi < 18.5 => "Underweight",
        bmi if bmi < 25.0 => "Normal weight",
        bmi if bmi < 30.0 => "Overweight",
        _ => "Obese",
    }
}

fn main() {
    let args = Args::parse();

    // Validate input values
    if args.weight <= 0.0 {
        eprintln!("Error: Weight must be a positive number");
        std::process::exit(1);
    }

    if args.height <= 0.0 {
        eprintln!("Error: Height must be a positive number");
        std::process::exit(1);
    }

    // Calculate BMI
    let bmi = calculate_bmi(args.weight, args.height);
    let category = categorise_bmi(bmi);

    // Display results
    println!("BMI Calculation Results:");
    println!("Weight: {:.1} kg", args.weight);
    println!("Height: {:.1} cm", args.height);
    println!("BMI: {:.2}", bmi);
    println!("Category: {}", category);
}
