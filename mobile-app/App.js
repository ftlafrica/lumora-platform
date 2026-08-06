import React, { useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const colors = {
  bg: "#050506",
  surface: "#101116",
  surface2: "#17181F",
  line: "rgba(245,242,234,0.13)",
  text: "#F5F2EA",
  soft: "rgba(245,242,234,0.72)",
  muted: "rgba(245,242,234,0.48)",
  cyan: "#00F5D4",
  violet: "#8B5CF6",
  gold: "#FFD166",
  goldHot: "#FFB703",
  coral: "#FF4D6D"
};

const languages = ["Yoruba", "Hausa", "Igbo", "Nigerian Pidgin", "Swahili", "Zulu", "Xhosa", "Amharic", "Arabic", "French", "English"];
const tones = ["Respectful", "Casual", "Street", "Business", "Teacher", "Storyteller", "Market"];

const modes = [
  { id: "chat", icon: "chatbubble-ellipses-outline", label: "AI Chat", prompt: "Ask in any African language, or mix naturally..." },
  { id: "translate", icon: "language-outline", label: "Translate", prompt: "Paste text to translate without losing tone..." },
  { id: "voice", icon: "mic-outline", label: "Voice Circle", prompt: "Describe the voice task you want..." },
  { id: "market", icon: "storefront-outline", label: "Market Mode", prompt: "Write a customer reply with local feeling..." },
  { id: "classroom", icon: "school-outline", label: "Classroom", prompt: "Teach a topic with familiar examples..." },
  { id: "creator", icon: "sparkles-outline", label: "Creator Studio", prompt: "Create a caption, script, or campaign..." }
];

const plans = [
  { name: "Free", price: "$0", desc: "Core AI chat and basic language controls.", features: ["Core chat", "Basic language selection", "Limited voice"] },
  { name: "Plus", price: "$8/mo", desc: "More usage, memory, tone, and saved workflows.", features: ["More messages", "Tone Dial", "Language Passport"] },
  { name: "Pro", price: "$18/mo", desc: "For creators, businesses, students, and power users.", features: ["Voice Circle", "Creator Studio", "Market Mode"], featured: true },
  { name: "Teams", price: "Custom", desc: "For organizations, schools, and enterprise teams.", features: ["Shared workspace", "Governance", "Priority support"] }
];

const initialMessages = [
  { role: "user", meta: "Yoruba + English", text: "Explain artificial intelligence to my younger cousin, but make it sound natural for home." },
  { role: "ai", meta: "Lumora - Respectful teacher tone", text: "Think of AI like a sharp helper that has learned from many examples. You can ask it questions, but you still guide it with your own sense." }
];

export default function App() {
  const [route, setRoute] = useState("welcome");
  const [isSignedIn, setSignedIn] = useState(false);
  const [authMode, setAuthMode] = useState("signup");
  const [activeMode, setActiveMode] = useState("chat");
  const [mainLanguage, setMainLanguage] = useState("Yoruba");
  const [bridgeLanguage, setBridgeLanguage] = useState("English");
  const [tone, setTone] = useState("Respectful");
  const [plan, setPlan] = useState("Free");
  const [name, setName] = useState("Murewa Oyetoro");
  const [email, setEmail] = useState("murewa@example.com");
  const [country, setCountry] = useState("Nigeria");
  const [city, setCity] = useState("Lagos");
  const [fontScale, setFontScale] = useState(1);
  const [memory, setMemory] = useState(true);
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  const mode = useMemo(() => modes.find(item => item.id === activeMode) || modes[0], [activeMode]);
  const firstName = name.split(" ")[0] || "friend";

  function navigate(nextRoute) {
    setRoute(nextRoute);
  }

  function startGuest() {
    setSignedIn(false);
    setRoute("chatHome");
  }

  function completeAuth() {
    setSignedIn(true);
    setRoute("chatHome");
  }

  function sendMessage(text = draft) {
    const clean = text.trim();
    if (!clean) return;
    const reply = {
      role: "ai",
      meta: `Lumora - ${mode.label} - ${tone} tone`,
      text: `I hear you. I would answer in ${mainLanguage}, bridge with ${bridgeLanguage} only where it helps, and keep the tone ${tone.toLowerCase()}. This mobile build is ready for the future model router integration.`
    };
    setMessages(current => [
      ...current,
      { role: "user", meta: `${mainLanguage} + ${bridgeLanguage}`, text: clean },
      reply
    ]);
    setDraft("");
    setRoute("chatThread");
  }

  function chooseMode(nextMode) {
    setActiveMode(nextMode);
    setRoute("chatHome");
  }

  const screen = {
    welcome: (
      <WelcomeScreen onGuest={startGuest} onAuth={() => navigate("auth")} onPlans={() => navigate("plans")} />
    ),
    auth: (
      <AuthScreen
        authMode={authMode}
        setAuthMode={setAuthMode}
        fields={{ name, email, country, city, mainLanguage, bridgeLanguage, tone }}
        setters={{ setName, setEmail, setCountry, setCity, setMainLanguage, setBridgeLanguage, setTone }}
        onSubmit={completeAuth}
        onGuest={startGuest}
      />
    ),
    chatHome: (
      <ChatHome
        isSignedIn={isSignedIn}
        firstName={firstName}
        mode={mode}
        activeMode={activeMode}
        onMode={chooseMode}
        draft={draft}
        setDraft={setDraft}
        onSend={sendMessage}
        onPrompt={sendMessage}
      />
    ),
    chatThread: (
      <ChatThread
        messages={messages}
        mode={mode}
        draft={draft}
        setDraft={setDraft}
        onSend={sendMessage}
        onLanguage={() => navigate("language")}
      />
    ),
    language: (
      <LanguageScreen mainLanguage={mainLanguage} bridgeLanguage={bridgeLanguage} tone={tone} setMainLanguage={setMainLanguage} setBridgeLanguage={setBridgeLanguage} setTone={setTone} />
    ),
    tools: <ToolsScreen activeMode={activeMode} onMode={chooseMode} />,
    plans: <PlansScreen plan={plan} setPlan={setPlan} onDone={() => navigate("dashboard")} />,
    dashboard: <DashboardScreen name={name} plan={plan} mainLanguage={mainLanguage} bridgeLanguage={bridgeLanguage} tone={tone} messages={messages} />,
    profile: (
      <ProfileScreen
        isSignedIn={isSignedIn}
        name={name}
        email={email}
        country={country}
        city={city}
        mainLanguage={mainLanguage}
        bridgeLanguage={bridgeLanguage}
        tone={tone}
        plan={plan}
        fontScale={fontScale}
        setFontScale={setFontScale}
        memory={memory}
        setMemory={setMemory}
        onAuth={() => navigate("auth")}
        onPlans={() => navigate("plans")}
      />
    )
  }[route] || null;

  return (
    <SafeAreaView style={styles.safe}>
      <ExpoStatusBar style="light" />
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.app}>
        <View style={[styles.scaleWrap, { transform: [{ scale: fontScale }] }]}>
          {screen}
        </View>
        {route !== "welcome" && route !== "auth" ? (
          <BottomTabs route={route} onRoute={navigate} />
        ) : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function WelcomeScreen({ onGuest, onAuth, onPlans }) {
  return (
    <Screen padded>
      <Brand subtitle="African language AI" />
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>Neon Baobab</Text>
        <Text style={styles.heroTitle}>Speak as you are. Lumora understands.</Text>
        <Text style={styles.lead}>A calm, futuristic AI chat for African languages, dialects, tone, voice, and everyday context.</Text>
      </View>
      <View style={styles.stack}>
        <PrimaryButton label="Continue to Lumora" icon="arrow-forward" onPress={onGuest} />
        <SecondaryButton label="Create account" icon="person-add-outline" onPress={onAuth} />
        <GhostButton label="View plans" icon="diamond-outline" onPress={onPlans} />
      </View>
      <SignalGrid />
    </Screen>
  );
}

function AuthScreen({ authMode, setAuthMode, fields, setters, onSubmit, onGuest }) {
  const isLogin = authMode === "login";
  return (
    <Screen padded>
      <Brand subtitle={isLogin ? "Welcome back" : "Language Passport"} />
      <Segmented options={["signup", "login"]} value={authMode} labels={["Sign up", "Log in"]} onChange={setAuthMode} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.formScroll}>
        {!isLogin ? <Field label="Full name" value={fields.name} onChangeText={setters.setName} /> : null}
        <Field label="Email" value={fields.email} onChangeText={setters.setEmail} keyboardType="email-address" />
        {!isLogin ? <Field label="Country" value={fields.country} onChangeText={setters.setCountry} /> : null}
        {!isLogin ? <Field label="City" value={fields.city} onChangeText={setters.setCity} /> : null}
        {!isLogin ? <PickerRow label="Main language" value={fields.mainLanguage} options={languages} onSelect={setters.setMainLanguage} /> : null}
        {!isLogin ? <PickerRow label="Bridge language" value={fields.bridgeLanguage} options={languages} onSelect={setters.setBridgeLanguage} /> : null}
        {!isLogin ? <PickerRow label="Tone" value={fields.tone} options={tones} onSelect={setters.setTone} /> : null}
        <Field label="Password" secureTextEntry value="" onChangeText={() => {}} />
        <PrimaryButton label={isLogin ? "Log in to Lumora" : "Create Lumora account"} icon="checkmark" onPress={onSubmit} />
        <SecondaryButton label="Continue as guest" icon="flash-outline" onPress={onGuest} />
      </ScrollView>
    </Screen>
  );
}

function ChatHome({ isSignedIn, firstName, mode, activeMode, onMode, draft, setDraft, onSend, onPrompt }) {
  return (
    <Screen padded>
      <Header title="Lumora" subtitle={mode.label} />
      <View style={styles.centerHero}>
        <Text style={styles.eyebrow}>{mode.label}</Text>
        <Text style={styles.chatTitle}>{isSignedIn ? `Welcome back, ${firstName}.` : "What should we shape"} in your language today?</Text>
        <Composer value={draft} onChangeText={setDraft} placeholder={mode.prompt} onSend={() => onSend()} />
        <ModeRail activeMode={activeMode} onMode={onMode} />
        <View style={styles.promptGrid}>
          {["Explain in my dialect", "Translate with tone", "Write a market reply", "Teach me simply"].map(label => (
            <Pressable key={label} style={styles.chip} onPress={() => onPrompt(`${label}: help me with this in a natural African voice.`)}>
              <Text style={styles.chipText}>{label}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </Screen>
  );
}

function ChatThread({ messages, mode, draft, setDraft, onSend, onLanguage }) {
  return (
    <Screen>
      <Header title="Lumora" subtitle={mode.label} right={<IconButton name="language-outline" onPress={onLanguage} />} />
      <ScrollView contentContainerStyle={styles.messages} showsVerticalScrollIndicator={false}>
        {messages.map((message, index) => (
          <View key={`${message.role}-${index}`} style={[styles.messageRow, message.role === "user" && styles.messageRowUser]}>
            <View style={[styles.avatar, message.role === "user" && styles.userAvatar]}>
              <Text style={styles.avatarText}>{message.role === "user" ? "You" : "L"}</Text>
            </View>
            <View style={[styles.bubble, message.role === "user" && styles.userBubble]}>
              <Text style={styles.meta}>{message.meta}</Text>
              <Text style={styles.bodyText}>{message.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Composer value={draft} onChangeText={setDraft} placeholder={mode.prompt} onSend={() => onSend()} />
    </Screen>
  );
}

function LanguageScreen({ mainLanguage, bridgeLanguage, tone, setMainLanguage, setBridgeLanguage, setTone }) {
  return (
    <Screen padded>
      <Header title="Language Passport" subtitle="Dialects, bridge language, and tone" />
      <PickerRow label="Main language" value={mainLanguage} options={languages} onSelect={setMainLanguage} />
      <PickerRow label="Bridge language" value={bridgeLanguage} options={languages} onSelect={setBridgeLanguage} />
      <PickerRow label="Tone" value={tone} options={tones} onSelect={setTone} />
    </Screen>
  );
}

function ToolsScreen({ activeMode, onMode }) {
  return (
    <Screen padded>
      <Header title="Tools" subtitle="Open features without crowding chat" />
      <View style={styles.toolGrid}>
        {modes.map(mode => (
          <Pressable key={mode.id} style={[styles.toolCard, activeMode === mode.id && styles.activeCard]} onPress={() => onMode(mode.id)}>
            <Ionicons name={mode.icon} size={22} color={activeMode === mode.id ? colors.bg : colors.gold} />
            <Text style={styles.cardTitle}>{mode.label}</Text>
            <Text style={styles.cardText}>{mode.prompt}</Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}

function PlansScreen({ plan, setPlan, onDone }) {
  return (
    <Screen padded>
      <Header title="Premium plans" subtitle="Choose your Lumora depth" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.planList}>
        {plans.map(item => (
          <Pressable key={item.name} style={[styles.planCard, item.featured && styles.featuredPlan, plan === item.name && styles.currentPlan]} onPress={() => { setPlan(item.name); onDone(); }}>
            <View style={styles.rowBetween}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            <Text style={styles.cardText}>{item.desc}</Text>
            {item.features.map(feature => <Text key={feature} style={styles.feature}>+ {feature}</Text>)}
            <Text style={styles.planAction}>{plan === item.name ? "Current plan" : `Choose ${item.name}`}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </Screen>
  );
}

function DashboardScreen({ name, plan, mainLanguage, bridgeLanguage, tone, messages }) {
  return (
    <Screen padded>
      <Header title="Dashboard" subtitle="Safe personal activity" />
      <View style={styles.metricGrid}>
        <Metric label="Plan" value={plan} />
        <Metric label="Messages" value={String(messages.length)} />
        <Metric label="Language" value={mainLanguage} />
        <Metric label="Tone" value={tone} />
      </View>
      <InfoCard title="Language Passport" lines={[name, `${mainLanguage} + ${bridgeLanguage}`, tone]} />
      <InfoCard title="Privacy note" lines={["Admin operations are separate.", "Your profile only shows safe personal data."]} />
    </Screen>
  );
}

function ProfileScreen({ isSignedIn, name, email, country, city, mainLanguage, bridgeLanguage, tone, plan, fontScale, setFontScale, memory, setMemory, onAuth, onPlans }) {
  return (
    <Screen padded>
      <Header title={isSignedIn ? name : "Guest profile"} subtitle={isSignedIn ? email : "Local prototype session"} />
      <InfoCard title="Profile" lines={[`${city}, ${country}`, `${mainLanguage} with ${bridgeLanguage}`, `${tone} tone`, `${plan} plan`]} />
      <View style={styles.stack}>
        <SecondaryButton label="Edit profile" icon="person-outline" onPress={onAuth} />
        <SecondaryButton label="Manage plan" icon="diamond-outline" onPress={onPlans} />
      </View>
      <View style={styles.settingsCard}>
        <Text style={styles.cardTitle}>Settings</Text>
        <Pressable style={styles.settingRow} onPress={() => setMemory(!memory)}>
          <Text style={styles.bodyText}>Memory</Text>
          <Text style={styles.goldText}>{memory ? "On" : "Off"}</Text>
        </Pressable>
        <Pressable style={styles.settingRow} onPress={() => setFontScale(fontScale >= 1.08 ? 1 : 1.08)}>
          <Text style={styles.bodyText}>Font size</Text>
          <Text style={styles.goldText}>{Math.round(fontScale * 100)}%</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

function BottomTabs({ route, onRoute }) {
  const tabs = [
    { route: "chatHome", icon: "chatbubble-outline", label: "Chat" },
    { route: "chatThread", icon: "time-outline", label: "History" },
    { route: "tools", icon: "grid-outline", label: "Tools" },
    { route: "dashboard", icon: "speedometer-outline", label: "Dash" },
    { route: "profile", icon: "person-outline", label: "Profile" }
  ];
  return (
    <View style={styles.tabs}>
      {tabs.map(tab => (
        <Pressable key={tab.route} style={styles.tab} onPress={() => onRoute(tab.route)}>
          <Ionicons name={tab.icon} size={20} color={route === tab.route ? colors.gold : colors.muted} />
          <Text style={[styles.tabText, route === tab.route && styles.activeTabText]}>{tab.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

function Screen({ children, padded }) {
  return <View style={[styles.screen, padded && styles.padded]}>{children}</View>;
}

function Brand({ subtitle }) {
  return (
    <View style={styles.brand}>
      <View style={styles.brandMark}><Text style={styles.brandLetter}>L</Text></View>
      <View>
        <Text style={styles.brandText}>Lumora</Text>
        <Text style={styles.brandSub}>{subtitle}</Text>
      </View>
    </View>
  );
}

function Header({ title, subtitle, right }) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerSub}>{subtitle}</Text>
      </View>
      {right}
    </View>
  );
}

function Composer({ value, onChangeText, placeholder, onSend }) {
  return (
    <View style={styles.composer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        style={styles.composerInput}
        multiline
      />
      <IconButton name="arrow-up" onPress={onSend} gold />
    </View>
  );
}

function ModeRail({ activeMode, onMode }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.modeRail}>
      {modes.map(mode => (
        <Pressable key={mode.id} style={[styles.modePill, activeMode === mode.id && styles.activePill]} onPress={() => onMode(mode.id)}>
          <Ionicons name={mode.icon} size={15} color={activeMode === mode.id ? colors.bg : colors.soft} />
          <Text style={[styles.modeText, activeMode === mode.id && styles.activeModeText]}>{mode.label}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

function PickerRow({ label, value, options, onSelect }) {
  return (
    <View style={styles.pickerBlock}>
      <Text style={styles.label}>{label}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.modeRail}>
        {options.map(option => (
          <Pressable key={option} style={[styles.modePill, value === option && styles.activePill]} onPress={() => onSelect(option)}>
            <Text style={[styles.modeText, value === option && styles.activeModeText]}>{option}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

function Field({ label, value, onChangeText, secureTextEntry, keyboardType }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={label}
        placeholderTextColor={colors.muted}
        style={styles.input}
      />
    </View>
  );
}

function Segmented({ options, labels, value, onChange }) {
  return (
    <View style={styles.segmented}>
      {options.map((option, index) => (
        <Pressable key={option} style={[styles.segment, value === option && styles.activeSegment]} onPress={() => onChange(option)}>
          <Text style={[styles.segmentText, value === option && styles.activeSegmentText]}>{labels[index]}</Text>
        </Pressable>
      ))}
    </View>
  );
}

function SignalGrid() {
  return (
    <View style={styles.signalGrid}>
      <InfoCard title="Dialect-aware" lines={["Country, city, bridge language, tone."]} compact />
      <InfoCard title="Voice-first" lines={["Speak, translate, transcribe, reply."]} compact />
      <InfoCard title="Model router" lines={["Prepared for African language models."]} compact />
    </View>
  );
}

function InfoCard({ title, lines, compact }) {
  return (
    <View style={[styles.infoCard, compact && styles.compactCard]}>
      <Text style={styles.cardTitle}>{title}</Text>
      {lines.map(line => <Text key={line} style={styles.cardText}>{line}</Text>)}
    </View>
  );
}

function Metric({ label, value }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.meta}>{label}</Text>
      <Text style={styles.metricValue}>{value}</Text>
    </View>
  );
}

function IconButton({ name, onPress, gold }) {
  return (
    <Pressable style={[styles.iconButton, gold && styles.goldButton]} onPress={onPress}>
      <Ionicons name={name} size={20} color={gold ? colors.bg : colors.soft} />
    </Pressable>
  );
}

function PrimaryButton({ label, icon, onPress }) {
  return <ActionButton label={label} icon={icon} onPress={onPress} primary />;
}

function SecondaryButton({ label, icon, onPress }) {
  return <ActionButton label={label} icon={icon} onPress={onPress} />;
}

function GhostButton({ label, icon, onPress }) {
  return <ActionButton label={label} icon={icon} onPress={onPress} ghost />;
}

function ActionButton({ label, icon, onPress, primary, ghost }) {
  return (
    <Pressable style={[styles.action, primary && styles.primaryAction, ghost && styles.ghostAction]} onPress={onPress}>
      <Ionicons name={icon} size={18} color={primary ? colors.bg : colors.text} />
      <Text style={[styles.actionText, primary && styles.primaryActionText]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  app: { flex: 1, backgroundColor: colors.bg },
  scaleWrap: { flex: 1 },
  screen: { flex: 1, paddingHorizontal: 16, paddingTop: 12, paddingBottom: 88 },
  padded: { paddingTop: 24 },
  brand: { flexDirection: "row", alignItems: "center", gap: 12 },
  brandMark: { width: 48, height: 48, borderRadius: 17, alignItems: "center", justifyContent: "center", backgroundColor: colors.gold },
  brandLetter: { color: colors.bg, fontSize: 22, fontWeight: "900" },
  brandText: { color: colors.text, fontSize: 22, fontWeight: "900" },
  brandSub: { color: colors.muted, marginTop: 2, fontWeight: "700" },
  hero: { flex: 1, justifyContent: "center" },
  eyebrow: { color: colors.cyan, fontSize: 12, fontWeight: "900", letterSpacing: 1.1, textTransform: "uppercase" },
  heroTitle: { color: colors.text, fontSize: 48, lineHeight: 50, fontWeight: "900", marginTop: 14 },
  chatTitle: { color: colors.text, fontSize: 30, lineHeight: 35, fontWeight: "900", marginTop: 10, marginBottom: 18 },
  lead: { color: colors.soft, fontSize: 16, lineHeight: 24, marginTop: 18 },
  stack: { gap: 10 },
  action: { minHeight: 54, borderRadius: 18, borderWidth: 1, borderColor: colors.line, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, backgroundColor: "rgba(245,242,234,0.055)" },
  primaryAction: { backgroundColor: colors.gold, borderColor: colors.gold },
  ghostAction: { backgroundColor: "transparent" },
  actionText: { color: colors.text, fontWeight: "900" },
  primaryActionText: { color: colors.bg },
  signalGrid: { gap: 10, marginTop: 18 },
  infoCard: { borderWidth: 1, borderColor: colors.line, borderRadius: 22, padding: 16, backgroundColor: "rgba(245,242,234,0.055)", marginTop: 12 },
  compactCard: { marginTop: 0 },
  cardTitle: { color: colors.text, fontSize: 18, fontWeight: "900" },
  cardText: { color: colors.soft, lineHeight: 21, marginTop: 8 },
  header: { minHeight: 54, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  headerTitle: { color: colors.text, fontSize: 22, fontWeight: "900" },
  headerSub: { color: colors.muted, marginTop: 2, fontWeight: "700" },
  centerHero: { flex: 1, justifyContent: "center" },
  composer: { minHeight: 66, borderRadius: 26, borderWidth: 1, borderColor: "rgba(255,209,102,0.24)", backgroundColor: colors.surface, flexDirection: "row", alignItems: "center", paddingLeft: 16, paddingRight: 8, gap: 8 },
  composerInput: { flex: 1, minHeight: 46, maxHeight: 110, color: colors.text, fontSize: 16 },
  iconButton: { width: 46, height: 46, borderRadius: 23, borderWidth: 1, borderColor: colors.line, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(245,242,234,0.055)" },
  goldButton: { backgroundColor: colors.gold, borderColor: colors.gold },
  modeRail: { gap: 8, paddingVertical: 12 },
  modePill: { minHeight: 36, borderRadius: 999, borderWidth: 1, borderColor: colors.line, paddingHorizontal: 12, flexDirection: "row", gap: 6, alignItems: "center", backgroundColor: "rgba(245,242,234,0.045)" },
  activePill: { backgroundColor: colors.gold, borderColor: colors.gold },
  modeText: { color: colors.soft, fontSize: 13, fontWeight: "800" },
  activeModeText: { color: colors.bg },
  promptGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: { borderWidth: 1, borderColor: colors.line, borderRadius: 999, paddingVertical: 9, paddingHorizontal: 12, backgroundColor: "rgba(245,242,234,0.05)" },
  chipText: { color: colors.soft, fontWeight: "800" },
  messages: { gap: 14, paddingBottom: 12 },
  messageRow: { flexDirection: "row", gap: 10, alignItems: "flex-start" },
  messageRowUser: { flexDirection: "row-reverse" },
  avatar: { width: 34, height: 34, borderRadius: 17, alignItems: "center", justifyContent: "center", backgroundColor: colors.gold },
  userAvatar: { backgroundColor: colors.surface2 },
  avatarText: { color: colors.bg, fontSize: 11, fontWeight: "900" },
  bubble: { flex: 1, borderRadius: 22, borderWidth: 1, borderColor: colors.line, padding: 14, backgroundColor: "rgba(0,245,212,0.075)" },
  userBubble: { backgroundColor: "rgba(139,92,246,0.12)" },
  meta: { color: colors.muted, fontSize: 12, fontWeight: "800" },
  bodyText: { color: colors.text, fontSize: 15, lineHeight: 23, marginTop: 5 },
  formScroll: { gap: 12, paddingBottom: 24 },
  field: { gap: 7 },
  label: { color: colors.muted, fontSize: 12, fontWeight: "900", textTransform: "uppercase", letterSpacing: 0.8 },
  input: { minHeight: 50, borderRadius: 16, borderWidth: 1, borderColor: colors.line, color: colors.text, paddingHorizontal: 14, backgroundColor: "rgba(245,242,234,0.055)" },
  pickerBlock: { gap: 6, marginTop: 10 },
  segmented: { minHeight: 50, borderRadius: 18, borderWidth: 1, borderColor: colors.line, padding: 5, flexDirection: "row", gap: 6, marginVertical: 18 },
  segment: { flex: 1, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  activeSegment: { backgroundColor: colors.gold },
  segmentText: { color: colors.muted, fontWeight: "900" },
  activeSegmentText: { color: colors.bg },
  toolGrid: { gap: 12 },
  toolCard: { borderRadius: 22, borderWidth: 1, borderColor: colors.line, padding: 16, backgroundColor: "rgba(245,242,234,0.055)" },
  activeCard: { borderColor: colors.gold, backgroundColor: "rgba(255,209,102,0.12)" },
  planList: { gap: 12, paddingBottom: 24 },
  planCard: { borderRadius: 24, borderWidth: 1, borderColor: colors.line, padding: 18, backgroundColor: "rgba(245,242,234,0.055)" },
  featuredPlan: { borderColor: colors.gold, backgroundColor: "rgba(255,209,102,0.11)" },
  currentPlan: { borderColor: colors.cyan },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", gap: 12 },
  price: { color: colors.gold, fontSize: 20, fontWeight: "900" },
  feature: { color: colors.soft, marginTop: 8 },
  planAction: { color: colors.gold, fontWeight: "900", marginTop: 14 },
  metricGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  metric: { width: "47.5%", minHeight: 92, borderRadius: 20, borderWidth: 1, borderColor: colors.line, padding: 14, backgroundColor: "rgba(245,242,234,0.055)", justifyContent: "center" },
  metricValue: { color: colors.text, fontSize: 21, fontWeight: "900", marginTop: 6 },
  settingsCard: { borderRadius: 22, borderWidth: 1, borderColor: colors.line, padding: 16, backgroundColor: "rgba(245,242,234,0.055)", marginTop: 12 },
  settingRow: { minHeight: 48, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: colors.line },
  goldText: { color: colors.gold, fontWeight: "900" },
  tabs: { position: "absolute", left: 12, right: 12, bottom: Platform.OS === "ios" ? 18 : 12, minHeight: 66, borderRadius: 24, borderWidth: 1, borderColor: colors.line, backgroundColor: "rgba(16,17,22,0.96)", flexDirection: "row", alignItems: "center", justifyContent: "space-around", paddingHorizontal: 6 },
  tab: { flex: 1, alignItems: "center", gap: 3 },
  tabText: { color: colors.muted, fontSize: 11, fontWeight: "800" },
  activeTabText: { color: colors.gold }
});
