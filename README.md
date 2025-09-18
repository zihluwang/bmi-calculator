# BMI Calculator

A command-line Body Mass Index (BMI) calculator written in Rust. This tool allows you to quickly calculate your BMI and receive health categorisation based on World Health Organisation (WHO) standards.

## Features

- **Fast and Efficient**: Built with Rust for optimal performance
- **Simple CLI Interface**: Easy-to-use command-line arguments
- **Health Categorisation**: Provides BMI categories according to WHO standards
- **Input Validation**: Ensures accurate calculations with proper error handling
- **Cross-Platform**: Works on Windows, macOS, and Linux

## Installation

### Prerequisites

- [Rust](https://rustup.rs/) (1.70.0 or later)
- Cargo (comes with Rust)

### Building from Source

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bmi-calculator
   ```

2. Build the project:
   ```bash
   cargo build --release
   ```

3. The executable will be available at `target/release/bmi-calculator`

## Usage

### Basic Usage

```bash
bmi-calculator --weight <WEIGHT> --height <HEIGHT>
```

### Parameters

- `--weight` or `-w`: Weight in kilograms (required)
- `--height`: Height in centimetres (required)
- `--help` or `-h`: Display help information
- `--version` or `-V`: Display version information

### Examples

Calculate BMI for a person weighing 70kg and 175cm tall:
```bash
bmi-calculator --weight 70 --height 175
```

Using short form for weight:
```bash
bmi-calculator -w 65 --height 160
```

### Sample Output

```
BMI Calculation Results:
Weight: 70.0 kg
Height: 175.0 cm
BMI: 22.86
Category: Normal weight
```

## BMI Categories

The calculator uses WHO standard BMI categories:

| BMI Range | Category |
|-----------|----------|
| < 18.5 | Underweight |
| 18.5 - 24.9 | Normal weight |
| 25.0 - 29.9 | Overweight |
| ≥ 30.0 | Obese |

## Development

### Running Tests

```bash
cargo test
```

### Running in Development Mode

```bash
cargo run -- --weight 70 --height 175
```

### Code Formatting

```bash
cargo fmt
```

### Linting

```bash
cargo clippy
```

## Dependencies

- [clap](https://crates.io/crates/clap) - Command-line argument parsing

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Licence

This project is licensed under the MIT Licence - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This tool is for informational purposes only and should not be used as a substitute for professional medical advice. Please consult with a healthcare provider for personalised health guidance.

## Author

Created with ❤️ using Rust