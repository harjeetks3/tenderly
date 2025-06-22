import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  Play,
  Book,
  Video,
  FileText,
  Headphones
} from "lucide-react";

const faqData = [
  {
    id: "1",
    question: "How does the AI tender summary work?",
    answer: "Our AI uses Claude Sonnet to analyze tender documents and create concise summaries highlighting key requirements, deadlines, and opportunities. The AI reads through lengthy tender descriptions and extracts the most important information to help you quickly understand if a tender is suitable for your company.",
    category: "AI Features"
  },
  {
    id: "2",
    question: "What is blockchain attestation and why is it important?",
    answer: "Blockchain attestation creates a tamper-proof record of your proposal submissions on the Algorand blockchain. This builds trust and credibility by providing verifiable proof of your bidding history that cannot be altered or faked. It helps establish your reputation in the tendering ecosystem.",
    category: "Blockchain"
  },
  {
    id: "3",
    question: "How accurate is the AI eligibility checker?",
    answer: "The AI eligibility checker analyzes tender requirements against your company profile with high accuracy, but it should be used as guidance only. We recommend reviewing the actual tender documents to confirm eligibility, as the AI may not catch all nuances or recent changes in requirements.",
    category: "AI Features"
  },
  {
    id: "4",
    question: "Where do the tender data come from?",
    answer: "We source tender data from Malaysian government open data portals, including federal and state government agencies. Our system regularly scrapes and updates tender information to ensure you have access to the latest opportunities. Some data may be supplemented with mock examples for demonstration purposes.",
    category: "Data Sources"
  },
  {
    id: "5",
    question: "Can I edit my proposal after submission?",
    answer: "No, once a proposal is submitted and recorded on the blockchain, it cannot be edited. This ensures the integrity of the submission process. However, you can save multiple drafts before final submission and use version history to track changes.",
    category: "Proposals"
  },
  {
    id: "6",
    question: "How do I upgrade to Premium features?",
    answer: "You can upgrade to Premium through the Settings > Billing section. Premium features include unlimited AI assistance, advanced proposal generation, priority support, and SMS notifications. Payment is processed securely through our billing system.",
    category: "Billing"
  },
  {
    id: "7",
    question: "Is my company data secure?",
    answer: "Yes, we take data security seriously. Your company information is encrypted and stored securely. We only use your data to provide AI assistance and improve your tender experience. We never share your confidential information with third parties.",
    category: "Security"
  },
  {
    id: "8",
    question: "How does the voice summary feature work?",
    answer: "The voice summary feature uses ElevenLabs AI to convert tender summaries into natural-sounding audio. This allows you to listen to tender information while multitasking or for better accessibility. You can play, pause, and replay the audio as needed.",
    category: "Voice Features"
  }
];

const categories = ["All", "AI Features", "Blockchain", "Data Sources", "Proposals", "Billing", "Security", "Voice Features"];

export const Help = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVoiceGuideActive, setIsVoiceGuideActive] = useState(false);

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const startVoiceGuide = () => {
    setIsVoiceGuideActive(true);
    // In real app, this would trigger ElevenLabs API
    alert("Voice guide started! This would play an audio walkthrough of the help section.");
    setTimeout(() => setIsVoiceGuideActive(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions, learn how to use Tenderly's features, and get support when you need it.
        </p>
      </div>

      {/* Voice Guide */}
      <Card className="mb-8 border-purple-200 bg-purple-50/50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Headphones className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-900">Voice Walkthrough</h3>
                <p className="text-sm text-purple-700">
                  Get an audio guide explaining how to use Tenderly's features
                </p>
              </div>
            </div>
            <Button
              onClick={startVoiceGuide}
              disabled={isVoiceGuideActive}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {isVoiceGuideActive ? (
                <>
                  <div className="animate-pulse w-4 h-4 bg-white rounded-full mr-2"></div>
                  Playing...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Start Voice Guide
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Book className="w-4 h-4 mr-2" />
                User Guide
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Video className="w-4  h-4 mr-2" />
                Video Tutorials
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                API Documentation
              </Button>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-gray-600">support@tenderly.my</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-green-500" />
                <div>
                  <p className="font-medium">Phone Support</p>
                  <p className="text-gray-600">+603-1234-5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MessageCircle className="w-4 h-4 text-purple-500" />
                <div>
                  <p className="font-medium">Live Chat</p>
                  <p className="text-gray-600">Available 9 AM - 6 PM</p>
                </div>
              </div>
              <Button className="w-full mt-4">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Live Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search help articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5" />
                <span>Frequently Asked Questions</span>
              </CardTitle>
              <p className="text-gray-600">
                {filteredFAQs.length} {filteredFAQs.length === 1 ? 'article' : 'articles'} found
              </p>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center space-x-3">
                        <span>{faq.question}</span>
                        <Badge variant="outline" className="text-xs">
                          {faq.category}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search terms or browse all categories.
                  </p>
                  <Button variant="outline" onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}>
                    Clear Search
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Feature Guides */}
          <Card>
            <CardHeader>
              <CardTitle>Feature Guides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">Getting Started with AI Features</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Learn how to use AI summaries, eligibility checking, and proposal generation.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">Understanding Blockchain Attestations</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Discover how blockchain technology builds your reputation and credibility.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">Optimizing Your Company Profile</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Complete your profile to get better AI assistance and tender matching.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-2">Writing Winning Proposals</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Tips and best practices for creating compelling tender proposals.
                  </p>
                  <Button variant="outline" size="sm">
                    Read Guide
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};