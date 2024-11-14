# Sanidi

## Building Web3, Building Africa 🌍

Sanidi is an open-source visual development platform that transforms the way developers interact with Web3 technologies. Born from the minds of two East African women technologists and co-founders of Daobitat (a property tokenization platform), Sanidi represents more than just a development tool—it's a bridge to the future of African technological innovation.

## Why Sanidi? Why Now?

The world is rapidly evolving, and traditional paths to prosperity are being redefined. As co-founders of Daobitat, we witnessed firsthand how Web3 technologies could revolutionize traditional systems, particularly in property ownership and investment. However, we also noticed a critical gap: the need for more African developers to participate in shaping this new digital frontier.

Our mission is twofold:
1. To simplify Web3 development through intuitive, visual tools
2. To empower African developers to build solutions that address continental needs

## Current Focus: Making WAGMI Accessible

Sanidi currently focuses on simplifying WAGMI (Web3 React Hooks library) configuration through a visual drag-and-drop interface. No more wrestling with complex configuration files or struggling with Web3 integration—Sanidi makes it as simple as building with blocks.

Features:
- 🎯 Visual drag-and-drop WAGMI configuration
- 🌍 Bilingual interface (English/Swahili)
- 📝 Real-time code generation
- 🔧 Customizable provider settings
- 📚 Built-in educational resources

## Future Vision: Beyond Configuration

While we're starting with WAGMI configuration, our vision extends much further:

### Immediate Horizon
- Expanding support for various EVM chains
- Building comprehensive tutorials and documentation
- Growing our African developer community

### Future Developments
- Integration with Starknet and Cairo
- Custom tool creation for Layer 2 solutions
- Advanced property tokenization tools
- African-focused Web3 solutions

## The Global Onchain Economy

We believe in a future where African developers are not just participants but leaders in the global onchain economy. Web3 technologies offer unprecedented opportunities:
- Decentralized Finance (DeFi)
- Tokenized Real-World Assets
- Decentralized Autonomous Organizations (DAOs)
- Non-Fungible Tokens (NFTs)
- Yield Farming and DeFi Protocols

These aren't just buzzwords—they're tools that can reshape economic opportunities across Africa and beyond.

## Built By Africa, For The World

Sanidi is proudly built by two Swahili-speaking women in tech, bringing diverse perspectives to Web3 development. We understand that the future of technology must include African voices, innovations, and solutions.

---

*"Sanidi" means "Build" in Swahili—because we're building more than tools, we're building the future.*

# Getting Started with Sanidi

## System Requirements

- Node.js version 22 or higher
- npm or yarn package manager
- Modern web browser with JavaScript enabled

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sanidi.git

# Navigate to project directory
cd sanidi

# Install dependencies
npm install

# Start the development server
npm start
```

## Quick Start Guide

1. **Initial Setup**
   ```bash
   # Install required dependencies
   npm install @wagmi/core wagmi react-beautiful-dnd tailwindcss@^3.4.14
   ```

2. **Environment Configuration**
   Create a `.env` file in your root directory:
   ```env
   REACT_APP_PROVIDER_API_KEY=your_provider_key
   ```

3. **Run the Application**
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`

## Basic Usage

1. **Configure Provider**
   - Navigate to the provider selection page
   - Choose your preferred Web3 provider (Alchemy, Infura, etc.)
   - Input your API key in the `.env` file

2. **Chain Configuration**
   - Select target blockchain networks
   - Configure network-specific settings
   - Preview generated configuration code

3. **Export Configuration**
   - Review the generated WAGMI configuration
   - Copy the code or export as a file
   - Integrate into your project

## Available Configuration Options

### Providers
- Public Provider
- Alchemy
- Infura
- QuickNode
- Moralis
- Ankr
- Custom Provider

### Supported Chains
- Ethereum Mainnet
- Polygon
- Arbitrum
- Optimism
- Custom EVM Chains

# Technical Architecture

## Frontend Architecture

```
src/
├── assets/            # Static assets including fonts
├── context/           # React context providers
│   └── UserContext.js # User state management
├── pages/
│   ├── aboutus/      # About page components
│   ├── joinus/       # Community engagement
│   ├── landingpage/  # Landing page components
│   └── steps/        # Configuration wizard
│       ├── chainconfig/
│       ├── getapikey/
│       ├── getprovider/
│       └── intro/
└── App.js            # Root component
```

## Core Components

### Provider Configuration System
```javascript
// Example Provider Configuration
const configureProvider = {
  alchemy: {
    setup: (apiKey) => alchemyProvider({ apiKey }),
    validation: (key) => key.length === 32,
    networks: ['mainnet', 'polygon', 'optimism']
  },
  // Additional providers...
}
```

### Chain Management
- Dynamic chain configuration
- Multi-chain support
- Custom chain definition
- Network switching capabilities

### Code Generation Engine
- Template-based code generation
- Real-time preview
- Syntax validation
- Export options

## Key Technologies

- **React 18+**: Frontend framework
- **Tailwind CSS 3.4.14**: Styling
- **react-beautiful-dnd**: Drag and drop functionality
- **wagmi**: Web3 React hooks
- **React Context**: State management

## Performance Considerations

- Lazy loading of configuration components
- Memoization of expensive computations
- Optimized re-renders using React.memo
- Code splitting by route

## Development Scripts

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

## Future Technical Considerations

1. **Scalability**
   - Microservices architecture for chain-specific logic
   - Caching layer for frequently used configurations
   - Service worker for offline capabilities

2. **Integration**
   - Plugin system for custom providers
   - API for external tool integration
   - Custom chain definition interface

3. **Performance**
   - Web Worker for code generation
   - Progressive Web App capabilities
   - Optimized asset loading

# Community & Support

## Get in Touch

### Project Leads
- Njeri Wangumo (njeriwangumo@gmail.com)
- Tracy Wankio (tracywankio29@gmail.com)

### Contributing
- Open issues on GitHub for bugs, feature requests, or discussions
- Contributions will soon be managed and tracked by a smart contract system
- Always create a new branch for your contributions if you have contributor access
- Submit a pull request for review

## Development Process
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support Resources
- GitHub Issues: Report bugs or suggest features
- Email Support: Reach out to project leads for direct assistance
- Coming Soon: Community forum and documentation portal

## Smart Contract Integration
We are working on implementing a smart contract system to:
- Track and verify contributions
- Manage contributor access
- Provide transparent recognition of community participation
- Enable decentralized governance of the project

Stay tuned for updates on this feature!

---

# License

## Open Source License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

### MIT License Terms
- Permission to use, copy, modify, and distribute
- License and copyright notice must be included
- The software is provided "AS IS"
- Authors or copyright holders are not liable

### Attribution Requirements
When using Sanidi, please include:
- Copyright notice
- Permission notice
- A link back to the original repository

---

*Note: The contribution tracking system via smart contract is under development. Current contributions are managed through traditional GitHub workflows.*